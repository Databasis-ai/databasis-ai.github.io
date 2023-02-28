import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from 'next/head'
import * as mdxComponents from '@/components/mdx'
import { MDXProvider } from "@mdx-js/react";

import { trpc } from "../utils/api";
import { Router } from 'next/router'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { Layout } from '@/components/Layout'
import "../styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';

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
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
        </MDXProvider>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);


