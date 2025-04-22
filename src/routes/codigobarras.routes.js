// src/routes/codigobarras.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Codigobarras.controller');

// Rutas CRUD básicas
router.post('/', controller.crearCodigobarras); // Crear
router.get('/', controller.obtenerCodigobarrass); // Obtener todos
router.get('/:id', controller.obtenerCodigobarrasPorId); // Obtener por ID
router.put('/:id', controller.actualizarCodigobarras); // Actualizar
router.delete('/:id', controller.eliminarCodigobarras); // Eliminación (lógica si aplica)

module.exports = router;
