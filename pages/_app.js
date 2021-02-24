import * as React from "react";
import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link rel="icon" href="/img/favicon.ico" />
        <title>Ahsan Athallah</title>
      </Head>
      <Stack minH="100vh" w="full" spacing={0}>
        <Navbar />
        <Box flexGrow={1} pt="80px">
          <Component {...pageProps} />
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
