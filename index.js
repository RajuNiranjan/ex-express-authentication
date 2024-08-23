import express from 'express'
import dotenv from 'dotenv'

const app = express()
const port = process.env.port || 5000

app.use('/', (req, res) => res.status(200).json({ message: "welcome to ex-express-authentication" }))

app.listen(port, () => console.log(`server running in port number ${port}`))