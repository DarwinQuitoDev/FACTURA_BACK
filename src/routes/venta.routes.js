// src/routes/venta.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Venta.controller');

// Rutas CRUD básicas
router.post('/', controller.crearVenta); // Crear
router.get('/', controller.obtenerVentas); // Obtener todos
router.get('/:id', controller.obtenerVentaPorId); // Obtener por ID
router.put('/:id', controller.actualizarVenta); // Actualizar
router.delete('/:id', controller.eliminarVenta); // Eliminación (lógica si aplica)

module.exports = router;
