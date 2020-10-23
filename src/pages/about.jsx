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

      <div>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="/assets/images/thinking-no-bg.png" alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default About
