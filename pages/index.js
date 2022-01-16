import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <Box className=''>
      <Head>
        <title>My Blog</title>
        <meta name='Nextjs Blog' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Text color='red.600' fontWeight='bold'>
          My Blog
        </Text>
        {blogPosts.map((item) => {
          return (
            <Box key={item.slug}>
              <h2>
                <Link href={`/blog/${item.slug}`}>
                  <a>{item.title}</a>
                </Link>
              </h2>
              <p>{item.date.toString()}</p>
              <p>{item.content}</p>
            </Box>
          );
        })}
      </main>
    </Box>
  );
}
