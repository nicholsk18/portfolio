import React, { useState, useEffect } from 'react'
import { page_title } from '../../public/assets/css/layout.module.css'

const PageHeader = ({ pre, text }) => {
  const textArray = text.split('')

  if (pre) {
    return (
      <h1 id={page_title}>
        {pre}
        <br />
        &lt;{' '}
        {setTimeout(
          () => (
            // textArray.map((letter) => (
            <span id="animate-text" key="a">
              {a}
            </span>
            // ))
          ),
          5000
        )}
        /&gt;
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
