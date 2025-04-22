const Rolpermiso = require('../models/rolpermiso.model');

// Crear
exports.crearRolpermiso = async (req, res) => {
  try {
    const item = await Rolpermiso.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerRolpermisos = async (req, res) => {
  try {
    const items = await Rolpermiso.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerRolpermisoPorId = async (req, res) => {
  try {
    const item = await Rolpermiso.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Rolpermiso no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarRolpermiso = async (req, res) => {
  try {
    const [actualizado] = await Rolpermiso.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Rolpermiso.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Rolpermiso no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarRolpermiso = async (req, res) => {
  try {
    const eliminado = await Rolpermiso.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Rolpermiso eliminado correctamente' });
    res.status(404).json({ error: 'Rolpermiso no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
