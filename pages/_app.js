import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
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
        <Flex
          flexDirection='row'
          p='4'
          justifyContent='space-between'
          bg={'gray.200'}
        >
          <Text
            as='h1'
            fontSize={'2xl'}
            fontWeight={'bold'}
            alignSelf={'center'}
          >
            My Blog
          </Text>
          <Flex
            fontSize={'2xl'}
            fontWeight={'semibold'}
            flexDirection={'row'}
            mr={'4'}
            gridGap={'4'}
          >
            <Box
              _hover={{ bg: 'gray.300' }}
              px='3'
              py={'1'}
              rounded={'lg'}
              shadow={'sm'}
            >
              <Link href='/'>
                <a className=''>Home</a>
              </Link>
            </Box>
            <Box
              _hover={{ bg: 'gray.300' }}
              px='3'
              py={'1'}
              rounded={'lg'}
              shadow={'sm'}
            >
              <Link href='/about'>
                <a>About</a>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
