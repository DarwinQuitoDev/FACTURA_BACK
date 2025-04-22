const Retencionventa = require('../models/retencionventa.model');

// Crear
exports.crearRetencionventa = async (req, res) => {
  try {
    const item = await Retencionventa.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerRetencionventas = async (req, res) => {
  try {
    const items = await Retencionventa.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerRetencionventaPorId = async (req, res) => {
  try {
    const item = await Retencionventa.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Retencionventa no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarRetencionventa = async (req, res) => {
  try {
    const [actualizado] = await Retencionventa.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Retencionventa.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Retencionventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarRetencionventa = async (req, res) => {
  try {
    const eliminado = await Retencionventa.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Retencionventa eliminado correctamente' });
    res.status(404).json({ error: 'Retencionventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
