import express from 'express';
const router = express.Router();

import checkUserAuth from '../middlewares/auth-middleware.js';
import UserController from '../controllers/userController.js';

// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)
router.use('/userinfo' , checkUserAuth)
router.use('/book_appointment', checkUserAuth)
router.use('/order_history', checkUserAuth)
router.use('/logout', checkUserAuth)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/mobile_verify', UserController.verify_mobile)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)
router.get('/userinfo' , UserController.getInfo )
router.post('/book_appointment' , UserController.book_appointment)
router.get('/order_history' , UserController.book_appointment)
router.post('/logout' , UserController.book_appointment)
router.post('/' , UserController.book_appointment)



export default router