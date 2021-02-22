import * as React from "react"
import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Ahsan Athallah</title>
      </Head>
      <Stack minH="100vh" w='full' spacing={0}>
       <Navbar />
       <Box flexGrow={1}>
        <Component {...pageProps} />
       </Box>
      </Stack>
    </ChakraProvider>
  )
}

export default MyApp
