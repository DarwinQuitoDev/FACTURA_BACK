// src/routes/certificadodigital.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Certificadodigital.controller');

// Rutas CRUD básicas
router.post('/', controller.crearCertificadodigital); // Crear
router.get('/', controller.obtenerCertificadodigitales); // Obtener todos
router.get('/:id', controller.obtenerCertificadodigitalPorId); // Obtener por ID
router.put('/:id', controller.actualizarCertificadodigital); // Actualizar
router.delete('/:id', controller.eliminarCertificadodigital); // Eliminación (lógica si aplica)

module.exports = router;
