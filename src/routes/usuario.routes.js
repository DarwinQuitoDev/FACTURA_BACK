// src/routes/usuarios.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Usuario.controller');

// Rutas CRUD básicas
router.post('/', controller.crearUsuario); // Crear
router.get('/', controller.obtenerUsuarios); // Obtener todos
router.get('/:id', controller.obtenerUsuarioPorId); // Obtener por ID
router.put('/:id', controller.actualizarUsuario); // Actualizar
router.delete('/:id', controller.eliminarUsuario); // Eliminación (lógica si aplica)

module.exports = router;
