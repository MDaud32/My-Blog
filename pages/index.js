import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>My Blog</title>
        <meta name='Nextjs Blog' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <footer className='text-2xl text-red-800 text-center'>
        Powered by M.Daud
      </footer>
    </div>
  );
}
