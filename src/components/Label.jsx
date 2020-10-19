const Label = ({ id, label }) => {
  return (
    <label id={id} htmlFor={label}>
      {label}
    </label>
  )
}
export default Label
