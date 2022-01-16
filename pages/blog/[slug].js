import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPost({ title, date, content }) {
  return (
    <div className=''>
      <Head>
        <title>posts</title>
        <meta name='About' content='This is Blog created with nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>My Blog Posts</h1>
        <h1>{title}</h1>
        <p>{date.toString()}</p>
        <p>{content}</p>
      </main>
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
