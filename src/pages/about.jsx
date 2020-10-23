import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import {
  about_container,
  about_section,
  reverse,
  about_img,
  about_text,
} from '../../public/assets/css/about.module.css'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Karson | Karson Nichols</title>
      </Head>
      <PageHeader text="About Me" />

      <div className={about_container}>
        <div className={about_section}>
          <div className={about_text}>
            <h2>Place Holder Text</h2>
            <p>
              lorim ipscum lorim ipscumlorim ipscumlorim ipscumlorim ipscumlorim
              ipscumlorim ipscumlorim ipscum
            </p>
          </div>

          <div className={about_img}>
            <img src="/assets/images/thinking-no-bg.png" alt="" />
          </div>
        </div>

        <div className={`${about_section} ${reverse}`}>
          <div className={about_img}>
            <img src="/assets/images/version_control-no-bg.png" alt="" />
          </div>
          <div className={about_text}>
            <h2>Place Holder Text</h2>
            <p>
              lorim ipscum lorim ipscumlorim ipscumlorim ipscumlorim ipscumlorim
              ipscumlorim ipscumlorim ipscum
            </p>
          </div>
        </div>

        <div className={about_section}>
          <div className={about_text}>
            <h2>Place Holder Text</h2>
            <p>
              lorim ipscum lorim ipscumlorim ipscumlorim ipscumlorim ipscumlorim
              ipscumlorim ipscumlorim ipscum
            </p>
          </div>

          <div className={about_img}>
            <img src="/assets/images/programming-no-bg.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
