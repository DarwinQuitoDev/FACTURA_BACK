const Tipocomprobante = require('../models/tipocomprobante.model');

// Crear
exports.crearTipocomprobante = async (req, res) => {
  try {
    const item = await Tipocomprobante.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerTipocomprobantes = async (req, res) => {
  try {
    const items = await Tipocomprobante.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerTipocomprobantePorId = async (req, res) => {
  try {
    const item = await Tipocomprobante.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Tipocomprobante no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarTipocomprobante = async (req, res) => {
  try {
    const [actualizado] = await Tipocomprobante.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Tipocomprobante.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Tipocomprobante no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar

exports.eliminarTipocomprobante = async (req, res) => {
  try {
    const [actualizado] = await Tipocomprobante.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'TipoComprobante desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'TipoComprobante no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
