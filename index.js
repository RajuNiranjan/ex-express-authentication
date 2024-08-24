import express from 'express'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/auth.router.js'
import './config/db.js'
import { ENV_VARS } from './config/envVars.js'



const app = express()
const PORT = ENV_VARS.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello There" });
})

app.use('/api/auth', authRouter)


app.listen(PORT, () => console.log(`server is running at port number : ${PORT}`))

