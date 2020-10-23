import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Form from "../components/Form";
import PageHeader from '../components/PageHeader'

const Contact = () => {

  return (
    <Layout>
      <Head>
        <title>Contact Karson | Karson Nichols</title>
      </Head>
      <PageHeader text="Contact" />

      <Form />
    </Layout>
  )
}

export default Contact
