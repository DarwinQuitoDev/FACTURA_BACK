// src/routes/impuesto.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Impuesto.controller');

// Rutas CRUD básicas
router.post('/', controller.crearImpuesto); // Crear
router.get('/', controller.obtenerImpuestos); // Obtener todos
router.get('/:id', controller.obtenerImpuestoPorId); // Obtener por ID
router.put('/:id', controller.actualizarImpuesto); // Actualizar
router.delete('/:id', controller.eliminarImpuesto); // Eliminación (lógica si aplica)

module.exports = router;
