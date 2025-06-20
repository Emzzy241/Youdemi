import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()


router.get('/', async (req, res) => {
    const courses = await prisma.course.findMany({
        where: {
            userId: req.userId
        }
    })
    res.json(courses)
})

router.post('/', async (req, res) => {
    const { courseName } = req.body

    const course = await prisma.course.create({
        data: {
            course,
            userId: req.userId
        }
    })

    res.json(course)
})

router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params

    const updatedCourse = await prisma.course.update({
        where: {
            id: parseInt(id),
            userId
        }
    })
    res.json(updatedCourse)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.body

    const userId = req.body

    await prisma.course.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    res.send({ message: "Course has been deleted" })
})


export default router