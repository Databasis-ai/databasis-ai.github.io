import { router } from "../trpc";
import { authRouter } from "./auth";
import { publicRouter } from "./public";

export const appRouter = router({
  public: publicRouter, // public resources
  auth: authRouter, // private resources for getting data associated with signed in user
});

// export type definition of API
export type AppRouter = typeof appRouter;
