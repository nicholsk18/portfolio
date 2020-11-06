import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import style from '../../public/assets/css/projects.module.css'

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Karson Project Section | Karson Nichols</title>
      </Head>
      <PageHeader text="Projects" pre="" />

      <div className={style.projects_container}>
        <div className={style.project}>
            <a href="https://willcannongolf.com">
              <img src="/assets/images/projects/willcannon-project.png" alt="" />
            </a>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
