// This is the folder where all the routes will be imported in and then later exported to the server.js file. 

// Hence, they will be importing the file from here

import authRoutes from './authRoutes.js'
import courseRoutes from './courseRoutes.js'
import kycRoutes from './kycRoutes.js'
import orderRoutes from './orderRoutes.js'
import paymentRoutes from './paymentRoutes.js'
import userRoutes from './userRoutes.js'
// import express from 'express'
import { Router } from 'express'

const router = Router()



export default router

