const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth');

// Public routes
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);

// Protected route (requiere autenticación)
router.get('/me', authMiddleware, authController.me);

module.exports = router;