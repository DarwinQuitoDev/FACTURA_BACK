// src/routes/tipoidentificacion.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Tipoidentificacion.controller');

// Rutas CRUD básicas
router.post('/', controller.crearTipoidentificacion); // Crear
router.get('/', controller.obtenerTipoidentificacions); // Obtener todos
router.get('/:id', controller.obtenerTipoidentificacionPorId); // Obtener por ID
router.put('/:id', controller.actualizarTipoidentificacion); // Actualizar
router.delete('/:id', controller.eliminarTipoidentificacion); // Eliminación (lógica si aplica)

module.exports = router;
