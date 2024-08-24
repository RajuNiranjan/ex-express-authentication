import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello There" });
})


app.listen(PORT, () => console.log(`server is running at port number : ${PORT}`))

