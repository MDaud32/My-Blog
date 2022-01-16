import Head from 'next/head';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>My Blog</title>
        <meta name='Nextjs Blog' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
      <footer className='text-2xl text-red-800 text-center'>
        Powered by M.Daud
      </footer>
    </div>
  );
}
