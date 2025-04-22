// src/routes/documentoelectronico.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Documentoelectronico.controller');

// Rutas CRUD básicas
router.post('/', controller.crearDocumentoelectronico); // Crear
router.get('/', controller.obtenerDocumentoelectronicos); // Obtener todos
router.get('/:id', controller.obtenerDocumentoelectronicoPorId); // Obtener por ID
router.put('/:id', controller.actualizarDocumentoelectronico); // Actualizar
router.delete('/:id', controller.eliminarDocumentoelectronico); // Eliminación (lógica si aplica)

module.exports = router;
