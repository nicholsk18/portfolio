import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import {
  skills_container,
  skill,
  skill_offset,
  skills_offset_container,
} from '../../public/assets/css/skills.module.css'

const Skills = () => {
  return (
    <Layout>
      <Head>
        <title>Karson Web Developer Skills | Karson Nichols</title>
      </Head>
      <PageHeader text="Skills" />

      <div className={skills_container}>
        <div className={skill}>
          <img src="/assets/icons/react.png" alt="" />
        </div>

        <div className={skill}>
          <img src="/assets/icons/css.png" alt="" />
        </div>

        <div className={skill}>
          <img src="/assets/icons/php.png" alt="" />
        </div>
      </div>

      <div className={skills_offset_container}>
        <div className={`${skill} ${skill_offset}`}>
          <img src="/assets/icons/js.png" alt="" />
        </div>
        <div className={`${skill} ${skill_offset}`}>
          <img src="/assets/icons/html.png" alt="" />
        </div>
      </div>

      <div className={skills_container}>
        <div className={skill}>
          <img src="/assets/icons/nodejs.png" alt="" />
        </div>
        <div className={skill}>
          <img src="/assets/icons/nextjs.png" alt="" />
        </div>
        <div className={skill}>
          <img src="/assets/icons/bootstrap.png" alt="" />
        </div>
      </div>

      <div className={skills_offset_container}>
        <div className={`${skill} ${skill_offset}`}>
          <img src="/assets/icons/scss.png" alt="" />
        </div>
        <div className={`${skill} ${skill_offset}`}>
          <img src="/assets/icons/wordpress.png" alt="" />
        </div>
      </div>

      <div className={skills_container}>
        <div className={skill}>
          <img src="/assets/icons/jquery.png" alt="" />
        </div>
        <div className={skill}>icon box</div>
        <div className={skill}>icon box</div>
      </div>

      <div className={skills_offset_container}>
        <div className={`${skill} ${skill_offset}`}>
          <img src="/assets/icons/java.png" alt="" />
        </div>
        <div className={`${skill} ${skill_offset}`}></div>
      </div>
    </Layout>
  )
}

export default Skills
