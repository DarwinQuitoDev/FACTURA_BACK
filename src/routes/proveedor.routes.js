// src/routes/proveedor.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Proveedor.controller');

// Rutas CRUD básicas
router.post('/', controller.crearProveedor); // Crear
router.get('/', controller.obtenerProveedors); // Obtener todos
router.get('/:id', controller.obtenerProveedorPorId); // Obtener por ID
router.put('/:id', controller.actualizarProveedor); // Actualizar
router.delete('/:id', controller.eliminarProveedor); // Eliminación (lógica si aplica)

module.exports = router;
