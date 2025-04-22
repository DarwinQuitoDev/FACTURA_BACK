// src/routes/retencioncompra.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Retencioncompra.controller');

// Rutas CRUD básicas
router.post('/', controller.crearRetencioncompra); // Crear
router.get('/', controller.obtenerRetencioncompras); // Obtener todos
router.get('/:id', controller.obtenerRetencioncompraPorId); // Obtener por ID
router.put('/:id', controller.actualizarRetencioncompra); // Actualizar
router.delete('/:id', controller.eliminarRetencioncompra); // Eliminación (lógica si aplica)

module.exports = router;
