import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send("Hi there, this is for authentications")
    res.sendStatus(200)
})

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hashSync(password, 8)

    console.log(password)
    console.log(hashedPassword)

    try {
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        const defaultCourse = `Hi there :) Add your first course!`
        await prisma.course.create({
            data: {
                courseName: defaultCourse,
                userId: user.id
            }
        })
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
    // res.send("This: " + password + " Became this hashed password: " + hashedPassword)
    // res.sendStatus(200)
    // const { username, email, password }
})

router.post('/login', async (req, res) => {
    try {
        const identifier = req.body.email || req.body.username;

        if (!identifier || !req.body.password) {
            return res.status(400).send({ message: "Missing credentials" });
        }

        // Deciding whether to search by email or username
        const whereClause = req.body.email
            ? { email: req.body.email }
            : { username: req.body.username };

        const user = await prisma.user.findUnique({ where: whereClause });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({ message: "Password is invalid" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

        res.json({ token });
        console.log('User logged in successfully:', user.username);
    } catch (err) {
        console.error(err);
        res.sendStatus(503);
    }

    // try {
    //     const user = await prisma.user.findUnique({
    //         where: {
    //             username: username,
    //             email: username
    //         }
    //     })

    //     if (!user) { return res.status(404).send({ message: "User not found" }) }

    //     const passwordIsValid = bcrypt.compareSync(password, user.password)
    //     if (!passwordIsValid) { return res.status(401).send({ message: "Password is invalid"}) }

    //     const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
    //     res.json({ token })
    // } catch (err) {
    //     console.log(err.message)
    //     res.sendStatus(503)
    // }
})

export default router