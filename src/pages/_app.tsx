import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Hacktoberfest 2020 — nest.land</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
