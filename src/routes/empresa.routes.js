// src/routes/empresa.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Empresa.controller');

// Rutas CRUD básicas
router.post('/', controller.crearEmpresa); // Crear
router.get('/', controller.obtenerEmpresas); // Obtener todos
router.get('/:id', controller.obtenerEmpresaPorId); // Obtener por ID
router.put('/:id', controller.actualizarEmpresa); // Actualizar
router.delete('/:id', controller.eliminarEmpresa); // Eliminación (lógica si aplica)

module.exports = router;
