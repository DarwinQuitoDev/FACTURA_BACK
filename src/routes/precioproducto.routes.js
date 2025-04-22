// src/routes/precioproducto.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Precioproducto.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPrecioproducto); // Crear
router.get('/', controller.obtenerPrecioproductos); // Obtener todos
router.get('/:id', controller.obtenerPrecioproductoPorId); // Obtener por ID
router.put('/:id', controller.actualizarPrecioproducto); // Actualizar
router.delete('/:id', controller.eliminarPrecioproducto); // Eliminación (lógica si aplica)

module.exports = router;
