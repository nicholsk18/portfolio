import React, {useEffect, useState} from 'react'
import Modal from "./Modal";
import styles from '../../public/assets/css/input.module.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [serverMessage, setServerMessage] = useState("")

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
        if (res.status === 400) {
          setServerMessage("One or more fields entered was wrong")

        } else if (res.status === 404) {
          setServerMessage("Server is down, try emailing directly to info@karsonnichols.com")
        }
        setServerMessage("success")
      })
      .catch((error) => {
        console.log(error)
      })

      sessionStorage.setItem("showModal", "true")
  }

  // If user put input in change the class name
  // this way animation will stay up
  const checkActive = (inputLength) => {
    return inputLength > 0 ? styles.label_active : styles.input_label
  }

  return (
    <form id={styles.contact_form} onSubmit={handleSubmit}>
      <Modal message={serverMessage} />
      <div className={styles.form_group}>
        <input
          id={styles.input_name}
          type="text"
          name={styles.input_name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className={styles.animate_line}></div>
        <label className={checkActive(name.length)} htmlFor="name">
          Name
        </label>
      </div>

      <div className={styles.form_group}>
        <input
          id={styles.input_email}
          type="email"
          name={styles.input_email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={styles.animate_line}></div>
        <label className={checkActive(email.length)} htmlFor="email">
          Email
        </label>
      </div>

      <div className={styles.form_group}>
        <input
          id={styles.input_subject}
          type="text"
          name={styles.input_subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <div className={styles.animate_line}></div>
        <label className={checkActive(subject.length)} htmlFor="subject">
          Subject
        </label>
      </div>

      <div className={styles.form_group}>
        <textarea
          id={styles.input_message}
          name={styles.input_message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className={styles.animate_line}></div>
        <label className={checkActive(message.length)} htmlFor="textarea">
          Enter your message here...
        </label>
      </div>

      <div className={styles.submit_btn_container}>
        <button className={styles.submit_btn}>Submit</button>
      </div>
    </form>
  )
}

export default Form
