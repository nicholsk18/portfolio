const Textarea = ({ id, name, placeholder }) => {
  return (
    <div className="form_textarea">
      <textarea id={name} name={name} placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea
