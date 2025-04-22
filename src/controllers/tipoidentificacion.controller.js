const Tipoidentificacion = require('../models/tipoidentificacion.model');

// Crear
exports.crearTipoidentificacion = async (req, res) => {
  try {
    const item = await Tipoidentificacion.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerTipoidentificacions = async (req, res) => {
  try {
    const items = await Tipoidentificacion.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerTipoidentificacionPorId = async (req, res) => {
  try {
    const item = await Tipoidentificacion.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Tipoidentificacion no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarTipoidentificacion = async (req, res) => {
  try {
    const [actualizado] = await Tipoidentificacion.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Tipoidentificacion.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Tipoidentificacion no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar

exports.eliminarTipoidentificacion = async (req, res) => {
  try {
    const [actualizado] = await Tipoidentificacion.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'TipoIdentificacion desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'TipoIdentificacion no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};