import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import {
  projects_container,
  project,
} from '../../public/assets/css/projects.module.css'

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Karson Project Section | Karson Nichols</title>
      </Head>
      <PageHeader text="Projects" />

      <div className={projects_container}>
        <div className={project}>
          <img src="/assets/images/projects/willcannon-project.png" alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default Projects
