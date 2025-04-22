const Detallecompra = require('../models/detallecompra.model');

// Crear
exports.crearDetallecompra = async (req, res) => {
  try {
    const item = await Detallecompra.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerDetallecompras = async (req, res) => {
  try {
    const items = await Detallecompra.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerDetallecompraPorId = async (req, res) => {
  try {
    const item = await Detallecompra.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Detallecompra no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarDetallecompra = async (req, res) => {
  try {
    const [actualizado] = await Detallecompra.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Detallecompra.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Detallecompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarDetallecompra = async (req, res) => {
  try {
    const eliminado = await Detallecompra.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Detallecompra eliminado correctamente' });
    res.status(404).json({ error: 'Detallecompra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
