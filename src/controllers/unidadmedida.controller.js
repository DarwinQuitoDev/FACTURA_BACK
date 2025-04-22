const Unidadmedida = require('../models/unidadmedida.model');

// Crear
exports.crearUnidadmedida = async (req, res) => {
  try {
    const item = await Unidadmedida.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerUnidadmedidas = async (req, res) => {
  try {
    const items = await Unidadmedida.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerUnidadmedidaPorId = async (req, res) => {
  try {
    const item = await Unidadmedida.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Unidadmedida no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarUnidadmedida = async (req, res) => {
  try {
    const [actualizado] = await Unidadmedida.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Unidadmedida.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Unidadmedida no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar

exports.eliminarUnidadmedida = async (req, res) => {
  try {
    const [actualizado] = await Unidadmedida.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'UnidadMedida desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'UnidadMedida no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};