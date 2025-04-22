// src/routes/pagoventa.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Pagoventa.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPagoventa); // Crear
router.get('/', controller.obtenerPagoventas); // Obtener todos
router.get('/:id', controller.obtenerPagoventaPorId); // Obtener por ID
router.put('/:id', controller.actualizarPagoventa); // Actualizar
router.delete('/:id', controller.eliminarPagoventa); // Eliminación (lógica si aplica)

module.exports = router;
