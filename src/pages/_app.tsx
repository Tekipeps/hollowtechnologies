import type { AppProps } from "next/app";

import "../styles/globals.css";
import Affix from "../components/Affix";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Affix />
    </>
  );
}
