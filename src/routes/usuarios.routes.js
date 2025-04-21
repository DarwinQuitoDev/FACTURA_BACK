// src/routes/usuarios.routes.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/Usuarios.controller');

// Rutas CRUD básicas
router.post('/', usuariosController.crearUsuario); //Creación de usuarios
router.get('/', usuariosController.obtenerUsuarios); //Obtener todos los usuarios
router.get('/:id', usuariosController.obtenerUsuarioPorId); //Obtener el usuario por ID
router.put('/:id', usuariosController.actualizarUsuario); //Actualizar el usuario por ID
router.delete('/:id', usuariosController.eliminarUsuario); //Eliminar el usuario por ID

module.exports = router;
