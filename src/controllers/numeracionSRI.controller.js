const Numeracionsri = require('../models/numeracionSRI.model');

// Crear
exports.crearNumeracionsri = async (req, res) => {
  try {
    const item = await Numeracionsri.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerNumeracionsris = async (req, res) => {
  try {
    const items = await Numeracionsri.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerNumeracionsriPorId = async (req, res) => {
  try {
    const item = await Numeracionsri.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Numeracionsri no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarNumeracionsri = async (req, res) => {
  try {
    const [actualizado] = await Numeracionsri.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Numeracionsri.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Numeracionsri no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarNumeracionsri = async (req, res) => {
  try {
    const [actualizado] = await Numeracionsri.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'NumeracionSri desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'NumeracionSri no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};