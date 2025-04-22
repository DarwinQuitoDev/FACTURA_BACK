// src/routes/formapago.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Formapago.controller');

// Rutas CRUD básicas
router.post('/', controller.crearFormapago); // Crear
router.get('/', controller.obtenerFormapagos); // Obtener todos
router.get('/:id', controller.obtenerFormapagoPorId); // Obtener por ID
router.put('/:id', controller.actualizarFormapago); // Actualizar
router.delete('/:id', controller.eliminarFormapago); // Eliminación (lógica si aplica)

module.exports = router;
