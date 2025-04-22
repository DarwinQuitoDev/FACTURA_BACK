// src/routes/pagocompra.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Pagocompra.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPagocompra); // Crear
router.get('/', controller.obtenerPagocompras); // Obtener todos
router.get('/:id', controller.obtenerPagocompraPorId); // Obtener por ID
router.put('/:id', controller.actualizarPagocompra); // Actualizar
router.delete('/:id', controller.eliminarPagocompra); // Eliminación (lógica si aplica)

module.exports = router;
