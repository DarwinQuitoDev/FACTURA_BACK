const Empresa = require('../models/empresa.model');

// Crear
exports.crearEmpresa = async (req, res) => {
  try {
    const item = await Empresa.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerEmpresas = async (req, res) => {
  try {
    const items = await Empresa.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerEmpresaPorId = async (req, res) => {
  try {
    const item = await Empresa.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Empresa no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarEmpresa = async (req, res) => {
  try {
    const [actualizado] = await Empresa.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Empresa.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Empresa no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarEmpresa = async (req, res) => {
  try {
    const [actualizado] = await Empresa.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Empresa desactivada correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Empresa no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};