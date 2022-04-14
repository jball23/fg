import Head from "next/head";
// import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

export default function Allowlist() {
  // const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Allow List for Fantasy Garage E30 M3</title>
        <meta name="description" content="The OG NFT project for car enthusiasts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};