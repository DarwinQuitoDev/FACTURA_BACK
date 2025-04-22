// src/routes/rol.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Rol.controller');

// Rutas CRUD básicas
router.post('/', controller.crearRol); // Crear
router.get('/', controller.obtenerRols); // Obtener todos
router.get('/:id', controller.obtenerRolPorId); // Obtener por ID
router.put('/:id', controller.actualizarRol); // Actualizar
router.delete('/:id', controller.eliminarRol); // Eliminación (lógica si aplica)

module.exports = router;
