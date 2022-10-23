import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Jeannette Trevias</title>
        <meta
          name="description"
          content="Musician Jeannette Trevias' Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
