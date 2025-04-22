// src/routes/rolpermiso.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Rolpermiso.controller');

// Rutas CRUD básicas
router.post('/', controller.crearRolpermiso); // Crear
router.get('/', controller.obtenerRolpermisos); // Obtener todos
router.get('/:id', controller.obtenerRolpermisoPorId); // Obtener por ID
router.put('/:id', controller.actualizarRolpermiso); // Actualizar
router.delete('/:id', controller.eliminarRolpermiso); // Eliminación (lógica si aplica)

module.exports = router;
