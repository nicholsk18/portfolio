import nc from 'next-connect'
import cors from 'cors'
import validator from 'validator'
import transport from "../../util/transport";

const handler = nc()
    .post((req, res) => {
        const { name, email, subject, message } = req.body

        // if (!validator.isEmail(email)) {
        //     return res.status(400)
        // }

        const messageObj = {
            from: email,
            to: process.env.USER_EMAIL,
            subject: subject,
            html: `${name} ${message}`
        }
        transport.sendMail(messageObj, (error, info) => {
            if (error) {
                return res.status(404)
            }

            res.status(200)
            res.end()
            return
        })

    })

export default handler