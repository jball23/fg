import Head from "next/head";
import Image from "next/image";
import ctaImage from "../public/images/bean_pod_FINAL2.gif";
import { Navbar } from '../components/Navbar';
import { Cta } from '../components/Cta';

export default function Home() {
  return (
    <div className="bg-pink-500 h-screen flex flex-col justify-between">
      <Head>
        <title>Fantasy Garage</title>
        <meta name="description" content="The drifters of the internet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center max-h-[200px] md:max-h-[300px] bg-pink-500">
        <div className="w-[300px] md:w-[600px] lg:w-[1000px]">
          <div className="animation"></div>
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