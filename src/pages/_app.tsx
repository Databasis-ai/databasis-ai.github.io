import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";

import { trpc } from "../utils/api";
import { Layout } from '@/components/LayoutHome'
import "../styles/globals.css";
import Meta from "@/components/Meta";
import { type ReactNode } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <>
      <Meta />
      <SessionProvider session={session}>
        <Layout {...pageProps}>
          {Component.requireAuthorization ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </SessionProvider>
    </>
  );
};

function Auth({ children } : { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <></>;
  }
  return <>{children}</>;
}

export default trpc.withTRPC(MyApp);


