import React, { Component } from 'react'
import Head from 'next/head'
import '../../public/assets/css/index.css'

export default function App({ Component, pageProps }) {

    return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154033556-1"></script>
          <script dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154033556-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-154033556-1');
</script>
`
          }}></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
