import React, {useState} from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import style from '../../public/assets/css/projects.module.css'

const Projects = () => {
    const [isShown, setIsShown] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Karson Project Section | Karson Nichols</title>
      </Head>
      <PageHeader text="Projects" pre="" />

      <div className={style.projects_container}>
        <div
            className={isShown ? style.project_overlay : style.project}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
              <img className={style.project_img} src="/assets/images/projects/willcannon-project.png" alt="" />
            {isShown ? (
                <div className={style.project_btns_container}>
                    <div className={style.project_btns}>
                        <a href="https://github.com/nicholsk18/wp-theme" className={style.btn}>GitHub</a>
                        <a href="https://willcannongolf.com" className={style.btn}>Website</a>
                    </div>
                </div>
            ) : null}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
