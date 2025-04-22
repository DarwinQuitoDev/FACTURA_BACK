const Persona = require('../models/persona.model');

// Crear
exports.crearPersona = async (req, res) => {
  try {
    const item = await Persona.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerPersonas = async (req, res) => {
  try {
    const items = await Persona.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerPersonaPorId = async (req, res) => {
  try {
    const item = await Persona.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Persona no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarPersona = async (req, res) => {
  try {
    const [actualizado] = await Persona.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Persona.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Persona no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarPersona = async (req, res) => {
  try {
    const [actualizado] = await Persona.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Persona desactivada correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Persona no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};