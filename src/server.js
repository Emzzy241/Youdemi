import express from 'express';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import authMiddleware from './middlewares/authMiddleware.js';
import appRoutes from './routes/appRoutes.js'
import userRoutes from './routes/userRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import kycRoutes from './routes/kycRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
// THank you for Watching, Dynasty :)

const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)


app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/getApp', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'dashboard.html'))
}) // add middleware here to prevent users from gaining access to the dashboard unless they sign up


app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/kyc', kycRoutes)
// app.s 

app.use('/auth', authRoutes)
app.use('/app', authMiddleware, appRoutes)


app.get("/hi", async (req, res) => {
    res.send("Hello World, Welcome to the YouDemi App")
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log("Yay the web server has already started")
    console.log(`Server has started on PORT: ${PORT}`)
})