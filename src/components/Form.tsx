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
            sessionStorage.setItem("code", "400")
        } else if (res.status > 404) {
            sessionStorage.setItem("code", "404")
        } else {
          sessionStorage.setItem("code", "200")
        }

          return res.json()
      }).then((data) => {
          setServerMessage(data.message)
    })
      .catch((error) => {
        console.log(error)
      })

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      sessionStorage.setItem("showModal", "true")
  }

  // If user put input in change the class name
  // this way animation will stay up
  const checkActive = (inputLength) => {
    return inputLength > 0 ? styles.label_active : styles.input_label
  }

  return (
      <>
          <Modal message={serverMessage} />
          <form id={styles.contact_form} onSubmit={handleSubmit}>
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
      </>
  )
}

export default Form
