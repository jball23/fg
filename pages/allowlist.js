// import Head from "next/head";
// import { useMoralis } from "react-moralis";
// import styles from "../styles/Home.module.css";

// export default function Allowlist() {
//   const { authenticate, isAuthenticated, logout, user } = useMoralis();

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Allow List for Fantasy Garage E30 M3</title>
//         <meta name="description" content="The OG NFT project for car enthusiasts." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {isAuthenticated ? (
//         <>
//           <button onClick={logout} className="bg-white">Logout</button>
//           <h2>Welcome {user.get("username")}</h2>
//           <h2>Your wallet address is {user.get("ethAddress")}</h2>
//         </>
//       ) : (
//         <button
//           onClick={() => {
//             authenticate({ provider: "metamask" });
//           }}
//         >
//           Sign in with MetaMask
//         </button>
//       )}
//     </div>
//   );
// };