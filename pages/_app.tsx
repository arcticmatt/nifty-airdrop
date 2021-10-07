import "@/css/global/Global.css";
import "@/css/global/colors/ColorVariables.css";
import "@/css/global/colors/ColorClasses.css";
import "@/css/global/colors/BackgroundColorClasses.css";
import "@/css/global/fonts/FontClasses.css";
import "@/css/global/fonts/FontVariables.css";

import { AppProps } from "next/app";
import Head from "next/head";

const META_DESCRIPTION = "An airdrop tool for cryptoartists";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500display=swap"
          rel="stylesheet"
        />

        <meta name="description" content={META_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
