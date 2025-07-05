import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('Hi there, welcome to the kyc routes')
})

export default router