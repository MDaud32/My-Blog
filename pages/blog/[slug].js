import Head from 'next/head';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>posts</title>
        <meta name='About' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>blog posts</h1>
      </main>
    </div>
  );
}
