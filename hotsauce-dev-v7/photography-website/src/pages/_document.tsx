import { Html, Head, Main, NextScript } from 'next/document'

// The Pages Router only sets a lang attribute on <html> if a custom document
// passes one. Without this file the page declares no language to screen
// readers or search engines.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
