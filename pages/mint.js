import Head from "next/head";
// import { useMoralis } from "react-moralis";
// import styles from "../styles/Home.module.css";
import { Navbar } from '../components/Navbar';
import axios from "axios";

export default function Mint() {
  // const { authenticate, isAuthenticated, logout, user } = useMoralis();

  async function mint() {
    const response = await axios.get('/api/whitelistMerkleTree');
    console.log(response)
  }

  return (
    <div>
      <Head>
        <title>Mint</title>
        <meta name="description" content="The OG NFT project for car enthusiasts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <button onClick={mint}>Mint</button>
    </div>
  );
};