import {
  container,
  page_container,
} from '../../public/assets/css/layout.module.css'
import Nav from '../components/nav'

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Nav />
      <div className={page_container}>{children}</div>
    </div>
  )
}

export default Layout
