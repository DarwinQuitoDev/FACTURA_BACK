const Establecimiento = require('../models/establecimiento.model');

// Crear
exports.crearEstablecimiento = async (req, res) => {
  try {
    const item = await Establecimiento.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerEstablecimientos = async (req, res) => {
  try {
    const items = await Establecimiento.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerEstablecimientoPorId = async (req, res) => {
  try {
    const item = await Establecimiento.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Establecimiento no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarEstablecimiento = async (req, res) => {
  try {
    const [actualizado] = await Establecimiento.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Establecimiento.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Establecimiento no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarEstablecimiento = async (req, res) => {
  try {
    const [actualizado] = await Establecimiento.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Establecimiento desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Establecimiento no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};