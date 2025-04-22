const Permiso = require('../models/permiso.model');

// Crear
exports.crearPermiso = async (req, res) => {
  try {
    const item = await Permiso.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPermisos = async (req, res) => {
  try {
    const items = await Permiso.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPermisoPorId = async (req, res) => {
  try {
    const item = await Permiso.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Permiso no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPermiso = async (req, res) => {
  try {
    const [actualizado] = await Permiso.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Permiso.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Permiso no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPermiso = async (req, res) => {
  try {
    const [actualizado] = await Permiso.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Permiso desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Permiso no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};