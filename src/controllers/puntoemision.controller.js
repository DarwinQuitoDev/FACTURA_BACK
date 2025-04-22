const Puntoemision = require('../models/puntoemision.model');

// Crear
exports.crearPuntoemision = async (req, res) => {
  try {
    const item = await Puntoemision.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPuntoemisions = async (req, res) => {
  try {
    const items = await Puntoemision.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPuntoemisionPorId = async (req, res) => {
  try {
    const item = await Puntoemision.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Puntoemision no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPuntoemision = async (req, res) => {
  try {
    const [actualizado] = await Puntoemision.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Puntoemision.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Puntoemision no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPuntoemision = async (req, res) => {
  try {
    const [actualizado] = await Puntoemision.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'PuntoEmision desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'PuntoEmision no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};