import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from 'next/head'

import { api } from "../utils/api";
import { Router, useRouter } from 'next/router'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { Layout } from '@/components/Layout'
import "../styles/globals.css";
function onRouteChange() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useMobileNavigationStore.getState().close()
}

Router.events.on('hashChangeStart', onRouteChange)
Router.events.on('routeChangeComplete', onRouteChange)
Router.events.on('routeChangeError', onRouteChange)

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <>
      <SessionProvider session={session}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);


