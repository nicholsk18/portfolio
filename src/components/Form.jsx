import React, { useState } from 'react'
import {
  animate_line,
  contact_form,
  form_group,
  label_active,
  input_label,
  input_name,
  input_email,
  input_subject,
  input_message,
  submit_btn_container,
  submit_btn,
} from '../../public/assets/css/input.module.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const createForm = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    }

    fetch('/api/contact', createForm)
      .then((res) => {
        console.log(res)
        if (res.status === 400) {
        } else if (res.status === 404) {
        }
        console.log(res.status)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // If user put input in change the class name
  // this way animation will stay up
  const checkActive = (inputLength) => {
    return inputLength > 0 ? label_active : input_label
  }

  return (
    <form id={contact_form} onSubmit={handleSubmit}>
      <div className={form_group}>
        <input
          id={input_name}
          type="text"
          name={input_name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className={animate_line}></div>
        <label className={checkActive(name.length)} htmlFor="name">
          Name
        </label>
      </div>

      <div className={form_group}>
        <input
          id={input_email}
          type="email"
          name={input_email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={animate_line}></div>
        <label className={checkActive(email.length)} htmlFor="email">
          Email
        </label>
      </div>

      <div className={form_group}>
        <input
          id={input_subject}
          type="text"
          name={input_subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <div className={animate_line}></div>
        <label className={checkActive(subject.length)} htmlFor="subject">
          Subject
        </label>
      </div>

      <div className={form_group}>
        <textarea
          id={input_message}
          name={input_message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className={animate_line}></div>
        <label className={checkActive(message.length)} htmlFor="textarea">
          Enter your message here...
        </label>
      </div>

      <div className={submit_btn_container}>
        <button className={submit_btn}>Submit</button>
      </div>
    </form>
  )
}

export default Form
