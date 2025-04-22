// src/routes/codigoice.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/CodigoICE.controller');

// Rutas CRUD básicas
router.post('/', controller.crearCodigoice); // Crear
router.get('/', controller.obtenerCodigoices); // Obtener todos
router.get('/:id', controller.obtenerCodigoicePorId); // Obtener por ID
router.put('/:id', controller.actualizarCodigoice); // Actualizar
router.delete('/:id', controller.eliminarCodigoice); // Eliminación (lógica si aplica)

module.exports = router;
