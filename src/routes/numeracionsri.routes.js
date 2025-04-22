// src/routes/numeracionsri.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/NumeracionSRI.controller');

// Rutas CRUD básicas
router.post('/', controller.crearNumeracionsri); // Crear
router.get('/', controller.obtenerNumeracionsris); // Obtener todos
router.get('/:id', controller.obtenerNumeracionsriPorId); // Obtener por ID
router.put('/:id', controller.actualizarNumeracionsri); // Actualizar
router.delete('/:id', controller.eliminarNumeracionsri); // Eliminación (lógica si aplica)

module.exports = router;
