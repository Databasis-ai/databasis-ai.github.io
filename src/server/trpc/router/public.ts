import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import AdvertisingResolver from './resolvers/advertising'
import YahooFinance from "./resolvers/yahoo-finance";

export const publicRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getWebsiteAd: publicProcedure.input(z.object({ website: z.string() }))
    .query(({ input }) => {
      return AdvertisingResolver({ website: input.website })
    }),
  insights: publicProcedure.query(async () => {
    const yahoo = new YahooFinance();
    const insights = await yahoo.insights('AMZN');
    return insights;
  })
});
