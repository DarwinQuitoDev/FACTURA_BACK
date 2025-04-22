const Formapago = require('../models/formapago.model');

// Crear
exports.crearFormapago = async (req, res) => {
  try {
    const item = await Formapago.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerFormapagos = async (req, res) => {
  try {
    const items = await Formapago.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerFormapagoPorId = async (req, res) => {
  try {
    const item = await Formapago.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Formapago no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarFormapago = async (req, res) => {
  try {
    const [actualizado] = await Formapago.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Formapago.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Formapago no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarFormapago = async (req, res) => {
  try {
    const [actualizado] = await Formapago.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'FormaPago desactivada correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'FormaPago no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};