import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPost({ title, date, content }) {
  return (
    <div className='w-8/12 text-center mx-auto '>
      <Head>
        <title>posts</title>
        <meta name='About' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        textAlign={'center'}
        border={'2px'}
        borderColor={'blackAlpha.400'}
        my='6'
        borderRadius={'3xl'}
        h={{ base: 'fit-content' }}
        px='4'
        py={'4'}
        shadow={'md'}
      >
        <Text
          as='h1'
          textColor={'gray.600'}
          fontSize='xl'
          fontWeight={'semibold'}
          pb='3'
        >
          {title}
        </Text>
        <Text as='p' textColor={'gray.500'}>
          {date}
        </Text>
        <Text as='p' textColor={'gray.600'} pt='3'>
          {content}
        </Text>
      </Box>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
