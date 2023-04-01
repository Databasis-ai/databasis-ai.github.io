import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/api";
import { Layout } from '@/components/LayoutHome'
import "../styles/globals.css";
import Meta from "@/components/Meta";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Meta/>
      <SessionProvider session={session}>
      <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);


