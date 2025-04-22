// src/routes/establecimiento.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Establecimiento.controller');

// Rutas CRUD básicas
router.post('/', controller.crearEstablecimiento); // Crear
router.get('/', controller.obtenerEstablecimientos); // Obtener todos
router.get('/:id', controller.obtenerEstablecimientoPorId); // Obtener por ID
router.put('/:id', controller.actualizarEstablecimiento); // Actualizar
router.delete('/:id', controller.eliminarEstablecimiento); // Eliminación (lógica si aplica)

module.exports = router;
