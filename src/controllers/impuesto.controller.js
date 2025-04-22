const Impuesto = require('../models/impuesto.model');

// Crear
exports.crearImpuesto = async (req, res) => {
  try {
    const item = await Impuesto.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerImpuestos = async (req, res) => {
  try {
    const items = await Impuesto.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerImpuestoPorId = async (req, res) => {
  try {
    const item = await Impuesto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Impuesto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarImpuesto = async (req, res) => {
  try {
    const [actualizado] = await Impuesto.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Impuesto.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Impuesto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarImpuesto = async (req, res) => {
  try {
    const [actualizado] = await Impuesto.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Impuesto desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Impuesto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};