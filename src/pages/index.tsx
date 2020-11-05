import React from 'react'
import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import style from '../../public/assets/css/home.module.css'
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
      <div id={style.welcome_section}>
        <PageHeader pre="I am a" text="Developer" />
        <div className={style.home_img}>
          <img src="/assets/images/solving-problems-no-bg.png" alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default Main
