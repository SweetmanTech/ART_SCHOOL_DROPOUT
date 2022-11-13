import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import EthereumCard from '../components/EthereumCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          <a rel="noreferrer" target="_blank" href="https://github.com/SweetmanTech/rainbowkit-tailwind">
            NextJS + Rainbowkit + Tailwind
          </a>
        </h1>

        
        <p className={styles.description}>
        Tezos and Solana plugins get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code> 
        </p>

        <div className="flex flex-col gap-4">

            
            <a href="#" className="py-10 px-3 border rounded-lg border-black">
              <div className="text-2xl">Solana</div>
              <p>Starting with the <code className={styles.code}>components/SolanaCard</code> to get started</p>
            </a>

            <a href="#" className="py-10 px-3 border rounded-lg border-black">
              <div className="text-2xl">Tezos</div>
              <p>Starting with the <code className={styles.code}>components/SolanaCard</code> to get started</p>
            </a>

            <EthereumCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
