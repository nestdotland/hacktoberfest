import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            media="(prefers-color-scheme:light)"
            href="/favicon_light.svg"
          />
          <link
            rel="icon"
            media="(prefers-color-scheme:dark)"
            href="/favicon_dark.svg"
          />
          <script
            src="https://unpkg.com/favicon-switcher@latest/dist/index.js"
            crossOrigin="anonymous"
            type="application/javascript"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
