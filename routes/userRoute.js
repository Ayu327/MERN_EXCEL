import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'

//router object
const router = express.Router()

//routers
//POST || LOGIn
router.post('/login',loginController)

router.post('/register',registerController)



export default router