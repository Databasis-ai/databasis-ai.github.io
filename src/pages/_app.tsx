import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import { trpc } from "../utils/api";
import { Layout } from '@/components/pages/shared/Layout'
import "../styles/globals.css";
import Meta from "@/components/pages/shared/Meta";
import { type ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';
import { OrganizationProvider } from "@/context/OrganizationContext";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <>
      <Meta />
      <Analytics />
      <SessionProvider session={session}>
        <OrganizationProvider>
          <Layout {...pageProps}>
            {Component.requireAuthorization ? (

              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </OrganizationProvider>
      </SessionProvider>
    </>
  );
};

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <></>;
  }
  return <>{children}</>;
}

export default trpc.withTRPC(MyApp);


