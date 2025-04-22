// src/routes/unidadmedida.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Unidadmedida.controller');

// Rutas CRUD básicas
router.post('/', controller.crearUnidadmedida); // Crear
router.get('/', controller.obtenerUnidadmedidas); // Obtener todos
router.get('/:id', controller.obtenerUnidadmedidaPorId); // Obtener por ID
router.put('/:id', controller.actualizarUnidadmedida); // Actualizar
router.delete('/:id', controller.eliminarUnidadmedida); // Eliminación (lógica si aplica)

module.exports = router;
