import React, { Component, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../../public/assets/css/index.css'
import * as gtag from '../lib/gtag'
import {AppProps} from "next/app";

export default function App({ Component, pageProps } : AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
