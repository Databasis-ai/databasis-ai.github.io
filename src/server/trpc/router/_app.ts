import { router } from "../trpc";
import { authRouter } from "./auth";
import { publicRouter } from "./public";

export const appRouter = router({
  // public resources that are available to anyone
  public: publicRouter,

  // private resources for getting data associated with signed in user
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
