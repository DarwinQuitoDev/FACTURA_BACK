const Parametrosistema = require('../models/parametrosistema.model');

// Crear
exports.crearParametrosistema = async (req, res) => {
  try {
    const item = await Parametrosistema.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerParametrosistemas = async (req, res) => {
  try {
    const items = await Parametrosistema.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerParametrosistemaPorId = async (req, res) => {
  try {
    const item = await Parametrosistema.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Parametrosistema no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarParametrosistema = async (req, res) => {
  try {
    const [actualizado] = await Parametrosistema.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Parametrosistema.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Parametrosistema no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarParametrosistema = async (req, res) => {
  try {
    const eliminado = await Parametrosistema.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Parametrosistema eliminado correctamente' });
    res.status(404).json({ error: 'Parametrosistema no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
