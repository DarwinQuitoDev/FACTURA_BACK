const Codigoice = require('../models/codigoICE.model');

// Crear
exports.crearCodigoice = async (req, res) => {
  try {
    const item = await Codigoice.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerCodigoices = async (req, res) => {
  try {
    const items = await Codigoice.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCodigoicePorId = async (req, res) => {
  try {
    const item = await Codigoice.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Codigoice no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCodigoice = async (req, res) => {
  try {
    const [actualizado] = await Codigoice.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Codigoice.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Codigoice no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
// Desactivar (eliminación lógica)
exports.eliminarCodigoice = async (req, res) => {
  try {
    const [actualizado] = await Codigoice.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'CodigoIce desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'CodigoIce no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};