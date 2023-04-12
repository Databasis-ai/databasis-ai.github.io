import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(({ ctx }) => {
    console.log('getting secret message', ctx.session);

    return "you can now see this secret message!";
  }),
});
