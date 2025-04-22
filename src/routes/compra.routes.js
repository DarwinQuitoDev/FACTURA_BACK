// src/routes/compra.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Compra.controller');

// Rutas CRUD básicas
router.post('/', controller.crearDetallecompra); // Crear
router.get('/', controller.obtenerCompras); // Obtener todos
router.get('/:id', controller.obtenerCompraPorId); // Obtener por ID
router.put('/:id', controller.actualizarCompra); // Actualizar
router.delete('/:id', controller.eliminarCompra); // Eliminación (lógica si aplica)

module.exports = router;
