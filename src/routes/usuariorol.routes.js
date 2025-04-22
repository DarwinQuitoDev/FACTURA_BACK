// src/routes/usuariorol.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Usuariorol.controller');

// Rutas CRUD básicas
router.post('/', controller.crearUsuariorol); // Crear
router.get('/', controller.obtenerUsuariorols); // Obtener todos
router.get('/:id', controller.obtenerUsuariorolPorId); // Obtener por ID
router.put('/:id', controller.actualizarUsuariorol); // Actualizar
router.delete('/:id', controller.eliminarUsuariorol); // Eliminación (lógica si aplica)

module.exports = router;
