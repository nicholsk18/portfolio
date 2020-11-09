import React, { useState, useEffect} from 'react'

const Modal = ({ message }) => {
    console.log(sessionStorage)
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false)
        sessionStorage.clear()
    }

    useEffect(() => {
        if (sessionStorage.showModal) {
            setIsVisible(true)
        }
    })

    const showModalClass = () => (isVisible ? { display: 'block'} : '' )

    return (
        isVisible ? (
        <div style={showModalClass()}>
            {message}
            <br />
            <button onClick={closeModal}>
                click me
            </button>
        </div>
    ) : null
    )
}

export default Modal