import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: process.env.USER_HOST_NAME,
    port: process.env.SERVER_PORT,
    auth: {
        user: process.env.TRANSPORT_NAME,
        pass: process.env.TRANSPORT_PASS,
    }
})

export default transport