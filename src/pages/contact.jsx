import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Form from '../components/Form'
import PageHeader from '../components/PageHeader'
import { text_center } from '../../public/assets/css/layout.module.css'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Karson | Karson Nichols</title>
      </Head>
      <PageHeader text="Contact" />

      <p className={text_center}>
        Reach out to me to leave a review on my portfolio or if you wanna work
        together.
      </p>
      <Form />

      <p className={text_center}>
        The form is not yet functional, please email{' '}
        <a href="mailto:info@karsonnichols.com">info@karsonnichols.com</a>
      </p>
    </Layout>
  )
}

export default Contact
