const Bodega = require('../models/bodega.model');

// Crear
exports.crearBodega = async (req, res) => {
  try {
    const item = await Bodega.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerBodegas = async (req, res) => {
  try {
    const items = await Bodega.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerBodegaPorId = async (req, res) => {
  try {
    const item = await Bodega.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Bodega no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarBodega = async (req, res) => {
  try {
    const [actualizado] = await Bodega.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Bodega.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Bodega no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarBodega = async (req, res) => {
  try {
    const eliminado = await Bodega.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Bodega eliminado correctamente' });
    res.status(404).json({ error: 'Bodega no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
