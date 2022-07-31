// import { MoralisProvider } from "react-moralis";
import ReactGA from 'react-ga';
import React from 'react';
import "../styles/globals.css";
import "../styles/animation.scss";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    ReactGA.initialize(`${process.env.GA_TRACKING_ID}`)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    // <MoralisProvider
    //   appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    //   serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_ID}
    // >

    // </MoralisProvider>
    <Component {...pageProps} />
  );
}

export default MyApp;
