import Link from 'next/link'
import {
  navbar,
  nav_item,
  nav_title,
  nav_sub_title,
  nav_link,
  active,
} from '../css/nav.module.css'

const Nav = () => {
  return (
    <nav id={navbar}>
      <h2 id={nav_title}>Karson Nichols</h2>
      <p id={nav_sub_title}>Web Developer</p>

      <div id={nav_item}>
        <Link href="/">
          <a className={`${nav_link} ${active}`}>Home</a>
        </Link>

        <Link href="/Projects">
          <a className={nav_link}>Projects</a>
        </Link>

        <Link href="/skills">
          <a className={nav_link}>Skills</a>
        </Link>

        <Link href="/about">
          <a className={nav_link}>About Me</a>
        </Link>

        <Link href="/contact">
          <a className={nav_link}>Contact</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
