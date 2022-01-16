import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
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
      <Flex flexDirection='row' p='2'>
        <Box>
          <Link href='/'>
            <a className='pr-2'>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </Box>
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
