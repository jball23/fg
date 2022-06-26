import Head from "next/head";
import { Navbar } from '../components/Navbar';
import { Cta } from '../components/Cta';

export default function Home() {
  return (
    <div className="bg-fg-pink u-100vh flex flex-col justify-between">
      <Head>
        <title>Fantasy Garage</title>
        <meta name="description" content="The drifters of the internet." />
        <meta name="application-name" content="Fantasy Garage" />
        <meta name="msapplication-TileColor" content="#ec008c" />
        <meta name="theme-color" content="#ec008c" />
        <meta name="apple-mobile-web-app-title" content="Fantasy Garage" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5ec008" />
      </Head>
      <Navbar />
      <div className="animation-outer-wrapper flex items-center justify-center bg-fg-pink">
        <div className="animation-inner-wrapper">
          <div className="animation-frame"></div>
        </div>
      </div>
      <Cta
          heading="Get your keys"
          subHeading="Project M3"
          buttonText="Join Our Discord"
        />
    </div>
  );
};