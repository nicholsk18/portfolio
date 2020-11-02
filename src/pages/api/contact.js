import nc from 'next-connect'
import cors from 'cors'

const handler = nc()
    .post((req, res) => {
        const { name, email, subject, message } = req.body

    })

module.exports = handler