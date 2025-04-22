// src/routes/tipocomprobante.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Tipocomprobante.controller');

// Rutas CRUD básicas
router.post('/', controller.crearTipocomprobante); // Crear
router.get('/', controller.obtenerTipocomprobantes); // Obtener todos
router.get('/:id', controller.obtenerTipocomprobantePorId); // Obtener por ID
router.put('/:id', controller.actualizarTipocomprobante); // Actualizar
router.delete('/:id', controller.eliminarTipocomprobante); // Eliminación (lógica si aplica)

module.exports = router;
