// src/routes/categoriaproducto.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Categoriaproducto.controller');

// Rutas CRUD básicas
router.post('/', controller.crearCategoriaproducto); // Crear
router.get('/', controller.obtenerCategoriaproductos); // Obtener todos
router.get('/:id', controller.obtenerCategoriaproductoPorId); // Obtener por ID
router.put('/:id', controller.actualizarCategoriaproducto); // Actualizar
router.delete('/:id', controller.eliminarCategoriaproducto); // Eliminación (lógica si aplica)

module.exports = router;
