const Detalleventa = require('../models/detalleventa.model');

// Crear
exports.crearDetalleventa = async (req, res) => {
  try {
    const item = await Detalleventa.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerDetalleventas = async (req, res) => {
  try {
    const items = await Detalleventa.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerDetalleventaPorId = async (req, res) => {
  try {
    const item = await Detalleventa.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Detalleventa no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarDetalleventa = async (req, res) => {
  try {
    const [actualizado] = await Detalleventa.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Detalleventa.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Detalleventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarDetalleventa = async (req, res) => {
  try {
    const eliminado = await Detalleventa.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Detalleventa eliminado correctamente' });
    res.status(404).json({ error: 'Detalleventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
