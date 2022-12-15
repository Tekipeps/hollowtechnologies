import type { AppProps } from "next/app";
import "../styles/globals.css";
import Affix from "../components/Affix";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://sea-lion-app-ncths.ondigitalocean.app/og_image.png"
        />
      </Head>
      <Component {...pageProps} />
      <Affix />
    </>
  );
}
