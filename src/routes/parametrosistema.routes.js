// src/routes/parametrosistema.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Parametrosistema.controller');

// Rutas CRUD básicas
router.post('/', controller.crearParametrosistema); // Crear
router.get('/', controller.obtenerParametrosistemas); // Obtener todos
router.get('/:id', controller.obtenerParametrosistemaPorId); // Obtener por ID
router.put('/:id', controller.actualizarParametrosistema); // Actualizar
router.delete('/:id', controller.eliminarParametrosistema); // Eliminación (lógica si aplica)

module.exports = router;
