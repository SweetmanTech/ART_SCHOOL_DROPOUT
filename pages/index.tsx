import type { NextPage } from 'next';
import Head from 'next/head';
import EthereumCard from '../components/EthereumCard';
import SolanaCard from '../components/SolanaCard';
import TezosCard from '../components/TezosCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Art School Dropout</title>
        <meta
          name="description"
          content="Project by Jamee Cornelia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            artschooldropout
        </h1>

        <div className="flex flex-col gap-4">
          <SolanaCard />
          <TezosCard />
          <EthereumCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
