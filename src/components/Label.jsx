/**
 * Currently do not use this component
 */
import React from 'react'

const Label = ({ className, label }) => {
  return (
    <label className={className} htmlFor={label}>
      {label}
    </label>
  )
}
export default Label
