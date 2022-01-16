import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box className='' color='red.600' fontWeight='bold'>
      <Head>
        <title>My Blog</title>
        <meta name='Nextjs Blog' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </Box>
  );
}
