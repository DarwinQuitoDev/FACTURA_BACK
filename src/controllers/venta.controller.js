const Venta = require('../models/venta.model');

// Crear
exports.crearVenta = async (req, res) => {
  try {
    const item = await Venta.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerVentas = async (req, res) => {
  try {
    const items = await Venta.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerVentaPorId = async (req, res) => {
  try {
    const item = await Venta.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Venta no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarVenta = async (req, res) => {
  try {
    const [actualizado] = await Venta.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Venta.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Venta no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarVenta = async (req, res) => {
  try {
    const eliminado = await Venta.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Venta eliminado correctamente' });
    res.status(404).json({ error: 'Venta no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
