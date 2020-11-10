import React, { useState, useEffect } from 'react'
import styles from '../../public/assets/css/modal.module.css'

const Modal = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [serverCode, setServerCode] = useState('')

  const closeModal = () => {
    setIsVisible(false)
    window.location.reload()
    sessionStorage.clear()
  }

  useEffect(() => {
    if (sessionStorage.showModal) {
      setIsVisible(true)
      setServerCode(sessionStorage.code)
    }
  })

  return isVisible ? (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <h2>Thank you for your submission</h2>

        {message}
        <div>
          <button className={styles.btn} onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
