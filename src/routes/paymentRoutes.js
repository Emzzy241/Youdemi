import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('Hi there welcome to the payment routes')
})

export default router