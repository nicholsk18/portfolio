import React from 'react'
import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import { welcome_section, home_img, mobile_placeholder } from '../../public/assets/css/home.module.css'
import Layout from '../components/Layout'

const Main = () => {

  return (
    <Layout>
      <Head>
        <title>Web Developer | Karson Nichols</title>
        <meta
          name="description"
          content="Freelance Web developer that creates beautiful websites"
        />
      </Head>
      <div id={welcome_section}>
        <PageHeader pre="I am a" text="Developer" />
        <div className={home_img}>
          <img src="/assets/images/solving-problems-test.png" alt="" />
        </div>
      </div>
        <div className={mobile_placeholder}>
            <p>Best viewed on desktop, mobile coming soon</p>
        </div>
    </Layout>
  )
}

export default Main
