// src/routes/movimientoinventario.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Movimientoinventario.controller');

// Rutas CRUD básicas
router.post('/', controller.crearMovimientoinventario); // Crear
router.get('/', controller.obtenerMovimientoinventarios); // Obtener todos
router.get('/:id', controller.obtenerMovimientoinventarioPorId); // Obtener por ID
router.put('/:id', controller.actualizarMovimientoinventario); // Actualizar
router.delete('/:id', controller.eliminarMovimientoinventario); // Eliminación (lógica si aplica)

module.exports = router;
