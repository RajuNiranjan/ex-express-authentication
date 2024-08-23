import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import './db.js'
import { AuthRouter } from './routers/auth.router.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))

app.get('/', (req, res) => res.status(200).json({ message: "welcome to ex-express-authentication" }))

app.use('/api/auth', AuthRouter)

app.listen(port, () => console.log(`server running in port number ${port}`))