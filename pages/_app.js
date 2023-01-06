import LayoutProvider from '../frontend/context/LayoutContext';
import Layer from '../frontend/Layout/Layout';
import AuthProvider from '../frontend/context/LoginContext';
import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  
  const { Layout, IsMobile } = Layer();

  return (
  <>

    <AuthProvider>
      <ChakraProvider theme={Layout}>
        <LayoutProvider IsMobile={IsMobile}>

            <Component {...pageProps} />

        </LayoutProvider>
      </ChakraProvider>
    </AuthProvider> 

  </>)
  
}
