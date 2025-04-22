// src/routes/bodega.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/bodega.controller');

// Rutas CRUD básicas
router.post('/', controller.crearBodega); // Crear
router.get('/', controller.obtenerBodegas); // Obtener todos
router.get('/:id', controller.obtenerBodegaPorId); // Obtener por ID
router.put('/:id', controller.actualizarBodega); // Actualizar
router.delete('/:id', controller.eliminarBodega); // Eliminación (lógica si aplica)

module.exports = router;
