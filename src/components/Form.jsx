import React from 'react'
import {
    animate_line,
    contact_form,
    email,
    form_group,
    input_label,
    message,
    name,
    subject
} from "../../public/assets/css/input.module.css";

const Form = () => {
    return (
        <form id={contact_form} action="">
            <div className={form_group}>
                <input id={name} type="text" name={name} required />
                <div className={animate_line}></div>
                <label className={input_label} htmlFor="name">
                    Name
                </label>
            </div>

            <div className={form_group}>
                <input id={email} type="email" name={email} required />
                <div className={animate_line}></div>
                <label className={input_label} htmlFor="email">
                    Email
                </label>
            </div>

            <div className={form_group}>
                <input id={subject} type="text" name={subject} required />
                <div className={animate_line}></div>
                <label className={input_label} htmlFor="subject">
                    Subject
                </label>
            </div>

            <div className={form_group}>
                <textarea id={message} name={message}></textarea>
                <div className={animate_line}></div>
                <label className={input_label} htmlFor="textarea">
                    Enter your message here...
                </label>
            </div>
        </form>
    )
}

export default Form