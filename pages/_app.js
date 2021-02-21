import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Main from "../components/Main"
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Ahsan Athallah</title>
      </Head>
      <Main>
       <Navbar />
       <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
