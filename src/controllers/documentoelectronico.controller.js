const Documentoelectronico = require('../models/documentoelectronico.model');

// Crear
exports.crearDocumentoelectronico = async (req, res) => {
  try {
    const item = await Documentoelectronico.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerDocumentoelectronicos = async (req, res) => {
  try {
    const items = await Documentoelectronico.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerDocumentoelectronicoPorId = async (req, res) => {
  try {
    const item = await Documentoelectronico.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Documentoelectronico no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarDocumentoelectronico = async (req, res) => {
  try {
    const [actualizado] = await Documentoelectronico.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Documentoelectronico.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Documentoelectronico no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarDocumentoelectronico = async (req, res) => {
  try {
    const eliminado = await Documentoelectronico.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Documentoelectronico eliminado correctamente' });
    res.status(404).json({ error: 'Documentoelectronico no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
