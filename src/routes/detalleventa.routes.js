// src/routes/detalleventa.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Detalleventa.controller');

// Rutas CRUD básicas
router.post('/', controller.crearDetalleventa); // Crear
router.get('/', controller.obtenerDetalleventas); // Obtener todos
router.get('/:id', controller.obtenerDetalleventaPorId); // Obtener por ID
router.put('/:id', controller.actualizarDetalleventa); // Actualizar
router.delete('/:id', controller.eliminarDetalleventa); // Eliminación (lógica si aplica)

module.exports = router;
