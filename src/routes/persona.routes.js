// src/routes/persona.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Persona.controller');

// Rutas CRUD básicas
router.post('/', controller.crearPersona); // Crear
router.get('/', controller.obtenerPersonas); // Obtener todos
router.get('/:id', controller.obtenerPersonaPorId); // Obtener por ID
router.put('/:id', controller.actualizarPersona); // Actualizar
router.delete('/:id', controller.eliminarPersona); // Eliminación (lógica si aplica)

module.exports = router;
