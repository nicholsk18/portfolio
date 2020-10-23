const Label = ({ className, label }) => {
  return (
    <label className={className} htmlFor={label}>
      {label}
    </label>
  )
}
export default Label
