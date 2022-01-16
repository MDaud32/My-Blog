import Head from 'next/head';

export default function About() {
  return (
    <div className=''>
      <Head>
        <title>About</title>
        <meta name='About' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </div>
  );
}
