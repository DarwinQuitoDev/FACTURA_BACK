// src/routes/bodega.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Bodega.controller');

// Rutas CRUD básicas
router.post('/', controller.crearbodega); // Crear
router.get('/', controller.obtenerbodegas); // Obtener todos
router.get('/:id', controller.obtenerbodegaPorId); // Obtener por ID
router.put('/:id', controller.actualizarbodega); // Actualizar
router.delete('/:id', controller.eliminarbodega); // Eliminación (lógica si aplica)

module.exports = router;
