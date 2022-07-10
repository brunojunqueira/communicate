import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../contexts/AuthContext'
import {useRouter} from "next/router";
import Header from '../components/Header/Header';
import { GlobalProvider } from '../contexts/GlobalContext';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <AuthProvider>
        <ChakraProvider>
          <GlobalProvider>
            { router.asPath !== '/' && <Header/> }
            <Component {...pageProps} />
          </GlobalProvider>
        </ChakraProvider>
    </AuthProvider>
    
  )
}

export default MyApp