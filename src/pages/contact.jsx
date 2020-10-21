import Head from 'next/head'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Label from '../components/Label'
import Textarea from '../components/Textarea'
import PageHeader from '../components/PageHeader'
import {
  contact_form,
  form_group,
  name_label,
  email_label,
  subject_label,
  message_label,
  name,
  email,
  subject,
  message,
  animate_line
} from '../../public/assets/css/input.module.css'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Karson | Karson Nichols</title>
      </Head>
      <PageHeader text="Contact" />
      <form id={contact_form} action="">
        <div className={form_group}>
          <Input id={name} type="text" />
          <div className={animate_line}></div>
          <Label id={name_label} label="name" />
        </div>

        <div className={form_group}>
          <Input id={email} type="email" />
          <div className={animate_line}></div>
          <Label id={email_label} label="email" />
        </div>

        <div className={form_group}>
          <Input id={subject} type="text" />
          <div className={animate_line}></div>
          <Label id={subject_label} label="subject" />
        </div>

        <div className={form_group}>
          <Textarea
            id={message}
            name="message"
            // placeholder="Enter your message here..."
          />
          <div className={animate_line}></div>
          <Label id={message_label} label="Enter your message here..." />
        </div>
      </form>
    </Layout>
  )
}

export default Contact
