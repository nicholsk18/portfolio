import React from 'react'
import { page_title } from '../css/layout.module.css'

const PageHeader = ({ pre, text }) => {
  if (pre) {
    return (
      <h1 id={page_title}>
        {pre}
        <br />
        &lt; <span id="animate-text">{text}</span> /&gt;
      </h1>
    )
  }

  return (
    <h1 id={page_title}>
      &lt; <span id="animate-text">{text}</span> /&gt;
    </h1>
  )
}

export default PageHeader
