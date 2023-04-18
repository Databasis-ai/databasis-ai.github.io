import { router, publicProcedure, protectedProcedure } from "../trpc";
import SourcesResolver from './resolvers/sources';
import { prisma } from '../../db/client'
import { z } from "zod";

export const authRouter = router({
  createOrUpdateSource: protectedProcedure.input(z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    provider: z.string(),
    premisis: z.string(),
    status: z.string(),
    connectionString: z.string(),
    organizationId: z.string(),
  })).mutation(({ input }) => {
    return SourcesResolver(input)
  }),
  getSources: protectedProcedure.input(z.object({ organizationId: z.string() })).query(({ input: { organizationId } }) => {
    return prisma.source.findMany({
      where: {
        organizationId: organizationId
      },
      include: {
        organization: true
      }
    });
  }),
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(({ ctx }) => {
    return "you can now see this secret message!";
  }),
});
