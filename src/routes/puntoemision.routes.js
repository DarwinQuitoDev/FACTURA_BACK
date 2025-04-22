// src/routes/puntoemision.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Puntoemision.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPuntoemision); // Crear
router.get('/', controller.obtenerPuntoemisions); // Obtener todos
router.get('/:id', controller.obtenerPuntoemisionPorId); // Obtener por ID
router.put('/:id', controller.actualizarPuntoemision); // Actualizar
router.delete('/:id', controller.eliminarPuntoemision); // Eliminación (lógica si aplica)

module.exports = router;
