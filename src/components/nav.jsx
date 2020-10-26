import Link from 'next/link'
import ActiveLink from './ActiveLink'
import {
  navbar,
  nav_item,
  nav_title,
  nav_sub_title,
  nav_link,
  active,
  nav_mobile,
} from '../../public/assets/css/nav.module.css'

const Nav = () => {
  return (
    <nav id={navbar}>
      <h2 id={nav_title}>Karson Nichols</h2>
      <p id={nav_sub_title}>Web Developer</p>

      <div id={nav_item}>
        <ActiveLink activeClassName={active} href="/">
          <a className={nav_link}>Home</a>
        </ActiveLink>

        <ActiveLink activeClassName={active} href="/projects">
          <a className={nav_link}>Projects</a>
        </ActiveLink>

        <ActiveLink activeClassName={active} href="/skills">
          <a className={nav_link}>Skills</a>
        </ActiveLink>

        <ActiveLink activeClassName={active} href="/about">
          <a className={nav_link}>About Me</a>
        </ActiveLink>

        <ActiveLink activeClassName={active} href="/contact">
          <a className={nav_link}>Contact</a>
        </ActiveLink>
      </div>
    </nav>
  )
}

export default Nav
