// import { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../../public/assets/css/index.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
