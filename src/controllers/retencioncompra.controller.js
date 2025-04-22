const Retencioncompra = require('../models/retencioncompra.model');

// Crear
exports.crearRetencioncompra = async (req, res) => {
  try {
    const item = await Retencioncompra.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerRetencioncompras = async (req, res) => {
  try {
    const items = await Retencioncompra.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerRetencioncompraPorId = async (req, res) => {
  try {
    const item = await Retencioncompra.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Retencioncompra no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarRetencioncompra = async (req, res) => {
  try {
    const [actualizado] = await Retencioncompra.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Retencioncompra.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Retencioncompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarRetencioncompra = async (req, res) => {
  try {
    const eliminado = await Retencioncompra.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Retencioncompra eliminado correctamente' });
    res.status(404).json({ error: 'Retencioncompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
