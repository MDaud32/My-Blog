import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

const BlogPostList = ({ slug, title, date, content }) => {
  return (
    <Box
      border={'2px'}
      borderColor={'blackAlpha.400'}
      my='6'
      borderRadius={'3xl'}
      h={{ base: 'fit-content' }}
      px='2'
      py={'3'}
      shadow={'md'}
    >
      <Text
        as='h1'
        textColor={'gray.600'}
        fontSize='xl'
        fontWeight={'semibold'}
        pb='3'
      >
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </Text>
      <Text as='p' textColor={'gray.500'}>
        {format(parseISO(date), 'MMMM do, uuu')}
      </Text>
      <Text as='p' textColor={'gray.600'}>
        {content}
      </Text>
    </Box>
  );
};

export default BlogPostList;
