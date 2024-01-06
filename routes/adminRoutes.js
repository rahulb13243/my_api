import express from 'express';
const router = express.Router();

import checkUserAuth from '../middlewares/auth-middleware.js';
import UserController from '../controllers/userController.js';
import WebController from '../controllers/webController.js'

// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

// Public Routes
router.post('/register', WebController.userRegistration)
router.post('/login', WebController.userLogin)
// router.post('/' , WebController.userLogin)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)


export default router