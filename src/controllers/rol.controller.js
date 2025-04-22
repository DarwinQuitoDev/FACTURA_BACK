const Rol = require('../models/rol.model');

// Crear
exports.crearRol = async (req, res) => {
  try {
    const item = await Rol.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerRols = async (req, res) => {
  try {
    const items = await Rol.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerRolPorId = async (req, res) => {
  try {
    const item = await Rol.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Rol no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarRol = async (req, res) => {
  try {
    const [actualizado] = await Rol.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Rol.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Rol no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar

exports.eliminarRol = async (req, res) => {
  try {
    const [actualizado] = await Rol.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Rol desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Rol no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};