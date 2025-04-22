// src/routes/producto.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');

// Rutas CRUD básicas
router.post('/', controller.crearProducto); // Crear
router.get('/', controller.obtenerProductos); // Obtener todos
router.get('/:id', controller.obtenerProductoPorId); // Obtener por ID
router.put('/:id', controller.actualizarProducto); // Actualizar
router.delete('/:id', controller.eliminarProducto); // Eliminación (lógica si aplica)

module.exports = router;
