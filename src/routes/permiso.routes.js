// src/routes/permiso.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Permiso.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPermiso); // Crear
router.get('/', controller.obtenerPermisos); // Obtener todos
router.get('/:id', controller.obtenerPermisoPorId); // Obtener por ID
router.put('/:id', controller.actualizarPermiso); // Actualizar
router.delete('/:id', controller.eliminarPermiso); // Eliminación (lógica si aplica)

module.exports = router;
