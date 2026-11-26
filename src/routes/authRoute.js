import express from 'express';

import {
    registerForm,
    loginForm,
    register,
    login,
    logout
} from '../controllers/authController.js'

const router = express.Router();

router.get('/register', registerForm);
router.get('/login', loginForm);

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;