import { Box, ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import '../styles/globals.css';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Text
          as='h1'
          textColor='gray.600'
          fontSize={'6xl'}
          fontWeight={'bold'}
          textAlign={'center'}
          pt='6'
        >
          My Blog
        </Text>
        <Flex
          fontSize={'2xl'}
          fontWeight={'semibold'}
          flexDirection={'row'}
          mr={'4'}
          gridGap={'4'}
          justifyContent={'center'}
          pb='10'
          pt='6'
          _hover={{ textColor: 'red-600' }}
        >
          <Box
            _hover={{ bg: 'gray.100' }}
            px='3'
            py={'1'}
            rounded={'lg'}
            shadow={'sm'}
          >
            <Link href='/'>
              <a className='text-gray-500'>Home</a>
            </Link>
          </Box>
          <Box
            _hover={{ bg: 'gray.100' }}
            px='3'
            py={'1'}
            rounded={'lg'}
            shadow={'sm'}
          >
            <Link href='/about'>
              <a className='text-gray-500'>About</a>
            </Link>
          </Box>
        </Flex>
      </header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
