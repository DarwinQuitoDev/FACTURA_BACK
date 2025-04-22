const Codigobarras = require('../models/codigobarras.model');

// Crear
exports.crearCodigobarras = async (req, res) => {
  try {
    const item = await Codigobarras.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerCodigobarrass = async (req, res) => {
  try {
    const items = await Codigobarras.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCodigobarrasPorId = async (req, res) => {
  try {
    const item = await Codigobarras.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Codigobarras no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCodigobarras = async (req, res) => {
  try {
    const [actualizado] = await Codigobarras.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Codigobarras.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Codigobarras no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarCodigobarras = async (req, res) => {
  try {
    const eliminado = await Codigobarras.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Codigobarras eliminado correctamente' });
    res.status(404).json({ error: 'Codigobarras no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
