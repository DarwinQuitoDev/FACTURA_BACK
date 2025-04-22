const Certificadodigital = require('../models/certificadodigital.model');

// Crear
exports.crearCertificadodigital = async (req, res) => {
  try {
    const item = await Certificadodigital.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerCertificadodigitales = async (req, res) => {
  try {
    const items = await Certificadodigital.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCertificadodigitalPorId = async (req, res) => {
  try {
    const item = await Certificadodigital.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Certificadodigital no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCertificadodigital = async (req, res) => {
  try {
    const [actualizado] = await Certificadodigital.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Certificadodigital.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Certificadodigital no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar

exports.eliminarCertificadodigital = async (req, res) => {
  try {
    const [updated] = await Certificadodigital.update({ activo: false }, { where: { id: req.params.id } });
    if (updated) return res.json({ mensaje: 'Certificado digital eliminado correctamente' });
    res.status(404).json({ error: 'Certificado digital no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};