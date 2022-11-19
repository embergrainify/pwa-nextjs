import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Progressive Web App - Next.JS" />
        <meta name="keywords" content="pwa nextjs" />
        <title>pwa-nextjs</title>

        <link rel="manifest" href="manifest.json" />
        <link
          href="icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        {/* https://web.dev/learn/pwa/web-app-manifest/#icons-in-safari > a single non-transparent PNG icon sized at 180 by 180 pixels is usually used*/}
        <link rel="apple-touch-icon" href="icons/icon-192x192.png"></link> 

        {/* <meta name="theme-color" content="#317EFB" /> */}
        <meta name="theme-color" content="#317EFB" media="(prefers-color-scheme: dark)" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
