import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import BlogPostList from '../component/blogList';
import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <Box className=''>
      <Head>
        <title>My Blog</title>
        <meta name='Nextjs Blog' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-8/12 text-center mx-auto'>
        {blogPosts.map((item) => (
          <BlogPostList key={item.slug} {...item} />
        ))}
      </main>
    </Box>
  );
}
