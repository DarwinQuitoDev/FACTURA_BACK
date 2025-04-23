const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth');

// Rutas públicas
router.post('/login', authController.login);
router.post('/refresh', authController.refresh);

// Rutas protegidas
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;