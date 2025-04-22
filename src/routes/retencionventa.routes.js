// src/routes/retencionventa.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Retencionventa.controller');

// Rutas CRUD básicas
router.post('/', controller.crearRetencionventa); // Crear
router.get('/', controller.obtenerRetencionventas); // Obtener todos
router.get('/:id', controller.obtenerRetencionventaPorId); // Obtener por ID
router.put('/:id', controller.actualizarRetencionventa); // Actualizar
router.delete('/:id', controller.eliminarRetencionventa); // Eliminación (lógica si aplica)

module.exports = router;
