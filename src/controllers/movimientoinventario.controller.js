const Movimientoinventario = require('../models/movimientoinventario.model');

// Crear
exports.crearMovimientoinventario = async (req, res) => {
  try {
    const item = await Movimientoinventario.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerMovimientoinventarios = async (req, res) => {
  try {
    const items = await Movimientoinventario.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerMovimientoinventarioPorId = async (req, res) => {
  try {
    const item = await Movimientoinventario.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Movimientoinventario no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarMovimientoinventario = async (req, res) => {
  try {
    const [actualizado] = await Movimientoinventario.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Movimientoinventario.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Movimientoinventario no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarMovimientoinventario = async (req, res) => {
  try {
    const eliminado = await Movimientoinventario.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Movimientoinventario eliminado correctamente' });
    res.status(404).json({ error: 'Movimientoinventario no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
