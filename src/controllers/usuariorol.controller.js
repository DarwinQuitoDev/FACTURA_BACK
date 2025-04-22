const Usuariorol = require('../models/usuariorol.model');

// Crear
exports.crearUsuariorol = async (req, res) => {
  try {
    const item = await Usuariorol.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerUsuariorols = async (req, res) => {
  try {
    const items = await Usuariorol.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerUsuariorolPorId = async (req, res) => {
  try {
    const item = await Usuariorol.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Usuariorol no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarUsuariorol = async (req, res) => {
  try {
    const [actualizado] = await Usuariorol.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Usuariorol.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Usuariorol no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarUsuariorol = async (req, res) => {
  try {
    const eliminado = await Usuariorol.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Usuariorol eliminado correctamente' });
    res.status(404).json({ error: 'Usuariorol no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
