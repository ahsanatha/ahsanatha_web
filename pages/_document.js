import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={"https://www.googletagmanager.com/gtag/js?id=G-2DX1NBKDMQ"}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2DX1NBKDMQ', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
