import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Events</title>
        <meta
          name="viewport"
          contetn="initial-scale=1.0, width=device-width"
        ></meta>
        <meta name="description" context="NextJs"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
