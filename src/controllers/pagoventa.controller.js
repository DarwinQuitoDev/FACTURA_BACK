const Pagoventa = require('../models/pagoventa.model');

// Crear
exports.crearPagoventa = async (req, res) => {
  try {
    const item = await Pagoventa.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPagoventas = async (req, res) => {
  try {
    const items = await Pagoventa.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPagoventaPorId = async (req, res) => {
  try {
    const item = await Pagoventa.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pagoventa no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPagoventa = async (req, res) => {
  try {
    const [actualizado] = await Pagoventa.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Pagoventa.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Pagoventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPagoventa = async (req, res) => {
  try {
    const eliminado = await Pagoventa.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Pagoventa eliminado correctamente' });
    res.status(404).json({ error: 'Pagoventa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
