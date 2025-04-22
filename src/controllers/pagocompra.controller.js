const Pagocompra = require('../models/pagocompra.model');

// Crear
exports.crearPagocompra = async (req, res) => {
  try {
    const item = await Pagocompra.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPagocompras = async (req, res) => {
  try {
    const items = await Pagocompra.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPagocompraPorId = async (req, res) => {
  try {
    const item = await Pagocompra.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pagocompra no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPagocompra = async (req, res) => {
  try {
    const [actualizado] = await Pagocompra.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Pagocompra.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Pagocompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPagocompra = async (req, res) => {
  try {
    const eliminado = await Pagocompra.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Pagocompra eliminado correctamente' });
    res.status(404).json({ error: 'Pagocompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
