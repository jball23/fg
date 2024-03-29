import Head from 'next/head';
import Script from 'next/script';
import { Navbar } from '../components/Navbar';
import { sendPageview } from '../lib/analytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import "../styles/globals.css";
import "../styles/animation.scss";

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  const { events } = useRouter();

  const handleChange = (url) => {
    sendPageview(url);
  };

  useEffect(() => {
    events.on('routeChangeComplete', handleChange);

    return () => {
      events.off('routeChangeComplete', handleChange);
    };
  }, [events]);

  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <div className="bg-fg-pink u-100vh flex flex-col justify-between">
          <Head>
            <title>Fantasy Garage</title>
            <meta name="description" content="The OG NFT project for car enthusiasts." />
            <meta name="application-name" content="Fantasy Garage" />
            <meta name="msapplication-TileColor" content="#ec008c" />
            <meta name="theme-color" content="#ec008c" />
            <meta name="apple-mobile-web-app-title" content="Fantasy Garage" />
            <meta property="og:title" content="Fantasy Garage NFT - Project M3" />
            <meta property="og:description" content="The OG NFT project for car enthusiasts." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://fantasygarage.xyz" />
            <meta property="og:image" content="https://fg-kappa.vercel.app/images/e30m3/og-home.jpg" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/images/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5ec008" />
          </Head>
          <Script
            strategy="beforeInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Navbar />
        <Component {...pageProps} />
      </div>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;