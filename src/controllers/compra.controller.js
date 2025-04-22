const Compra = require('../models/compra.model');

// Crear
exports.crearCompra = async (req, res) => {
  try {
    const item = await Compra.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerCompras = async (req, res) => {
  try {
    const items = await Compra.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCompraPorId = async (req, res) => {
  try {
    const item = await Compra.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Compra no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCompra = async (req, res) => {
  try {
    const [actualizado] = await Compra.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Compra.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Compra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarCompra = async (req, res) => {
  try {
    const eliminado = await Compra.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Compra eliminado correctamente' });
    res.status(404).json({ error: 'Compra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
