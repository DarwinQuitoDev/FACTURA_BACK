const Precioproducto = require('../models/precioproducto.model');

// Crear
exports.crearPrecioproducto = async (req, res) => {
  try {
    const item = await Precioproducto.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPrecioproductos = async (req, res) => {
  try {
    const items = await Precioproducto.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPrecioproductoPorId = async (req, res) => {
  try {
    const item = await Precioproducto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Precioproducto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPrecioproducto = async (req, res) => {
  try {
    const [actualizado] = await Precioproducto.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Precioproducto.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Precioproducto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPrecioproducto = async (req, res) => {
  try {
    const [actualizado] = await Precioproducto.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'PreciosProducto desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'PreciosProducto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
