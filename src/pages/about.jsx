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
            <h2>Path To Programming</h2>
            <p>
              I started learning computer science my junior year of college. I
              was not sure where that path would take me so I stopped for a
              little while. Early in 2015 I discovered CS50 in edX. That is the
              class that truly got me more interested in computer science. I
              started with HTML and CSS. Since then I have been getting into all
              kinds of software and even contributed to open source projects.
            </p>
          </div>

          <div className={about_img}>
            <img
              src="/assets/images/thinking-no-bg.png"
              alt="man thinking by computer"
            />
          </div>
        </div>

        <div className={`${about_section} ${reverse}`}>
          <div className={about_img}>
            <img
              src="/assets/images/version_control-no-bg.png"
              alt="version control"
            />
          </div>
          <div className={about_text}>
            <h2>The Challenge</h2>
            <p>
              Altho learning programming was really fun it does come with a lot
              of challenges. Computer science is a broad field and along the way
              I would get discouraged that there was no way I could ever learn
              all the things I needed to know to get a job. I had a really good
              mentor who helped me along the way. I still have a long way to go
              but it is encouraging to know that there are people who will help
              you on this path.
            </p>
          </div>
        </div>

        <div className={about_section}>
          <div className={about_text}>
            <h2>From A Hobby To A Career</h2>
            <p>
              After I finished contributing to the open source project I decided
              I am good enough to do this as a career. I started applying as
              well as focusing on tools that are used in my area. In August of
              2019 I landed my first real programming job and it has been really
              exciting. Since then I continue to learn and have started
              freelancing on the side to help improve my skills.
            </p>
          </div>

          <div className={about_img}>
            <img
              src="/assets/images/programming-no-bg.png"
              alt="man programming"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
