import "@/css/global/Global.css";
import "@/css/global/colors/ColorVariables.css";
import "@/css/global/colors/ColorClasses.css";
import "@/css/global/colors/BackgroundColorClasses.css";
import "@/css/global/fonts/FontClasses.css";
import "@/css/global/fonts/FontVariables.css";

import { AppProps } from "next/app";
import Head from "next/head";

const META_DESCRIPTION = "Get a list of everyone who has collected your NFTs";
// Different dimensions than twitter
const META_IMAGE_FACEBOOK =
  "https://firebasestorage.googleapis.com/v0/b/nifty-pixels.appspot.com/o/nifty-airdrop-facebook-preview.png?alt=media&token=9da4bc9c-ba8a-44e4-b096-412259233639";
const META_IMAGE_TWITTER =
  "https://firebasestorage.googleapis.com/v0/b/nifty-pixels.appspot.com/o/nifty-airdrop-twitter-preview.png?alt=media&token=18f7604b-15c8-44af-b4dd-2347cb47ff23";
const META_TITLE = "Nifty Airdrop";

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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Nifty Airdrop</title>

        <meta name="description" content={META_DESCRIPTION} />

        {/* Facebook */}
        <meta property="og:url" content="https://www.creatorinbox.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={META_IMAGE_FACEBOOK} />
        <meta
          name="facebook-domain-verification"
          content="96lxaxg4giwr0wi0pynevirem9nvup"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* TODO: add */}
        {/* <meta name="twitter:site" content="@withwizards" /> */}
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={META_IMAGE_TWITTER} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
