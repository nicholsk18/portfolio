import nc from 'next-connect'
import cors from 'cors'
import validator from 'validator'
import transport from "../../util/transport";

const handler = nc()
    .post((req, res) => {
        const { name, email, subject, message } = req.body

        if (!validator.isEmail(email)) {
            console.log(email)
            return res.status(400).json({ "message": "the email field was invalid" })
        }

        const messageObj = {
            from: email,
            to: process.env.TRANSPORT_EMAIL,
            subject: subject,
            html: `${name} ${message}`
        }
        transport.sendMail(messageObj, (error, info) => {
            if (error) {
                return res.status(404).json({ "message": "the message was not successful" })
            }

            return res.status(200).json({ "message": "The message was a success" })
        })

    })

export default handler