// import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
