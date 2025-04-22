// src/routes/detallecompra.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/detallecompra.controller');

// Rutas CRUD básicas
router.post('/', controller.crearDetallecompra); // Crear
router.get('/', controller.obtenerDetallecompras); // Obtener todos
router.get('/:id', controller.obtenerDetallecompraPorId); // Obtener por ID
router.put('/:id', controller.actualizarDetallecompra); // Actualizar
router.delete('/:id', controller.eliminarDetallecompra); // Eliminación (lógica si aplica)

module.exports = router;
