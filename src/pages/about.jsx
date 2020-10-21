import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Karson | Karson Nichols</title>
      </Head>
      <PageHeader text="About Me" />
    </Layout>
  )
}

export default About
