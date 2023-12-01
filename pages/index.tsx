import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../images/logo.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlipFlop</title>
        <meta
          content="Front End to Access the PoolTogether V5 smart contracts"
          name="with the help of decent.xys's The Box Hooks, we can swap tokens directly from V4 to V5 PoolTogether"
        />
        <link href="" rel="icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" className={styles.logo} priority={true} />
          <p className={styles.logoText}>FlipFlop</p>
        </div>
        <ConnectButton />
      </main>
      
    </div>
  );
};

export default Home;
