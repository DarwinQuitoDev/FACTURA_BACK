const Categoriaproducto = require('../models/categoriaproducto.model');

// Crear
exports.crearCategoriaproducto = async (req, res) => {
  try {
    const item = await Categoriaproducto.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerCategoriaproductos = async (req, res) => {
  try {
    const items = await Categoriaproducto.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCategoriaproductoPorId = async (req, res) => {
  try {
    const item = await Categoriaproducto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Categoriaproducto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCategoriaproducto = async (req, res) => {
  try {
    const [actualizado] = await Categoriaproducto.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Categoriaproducto.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Categoriaproducto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarCategoriaproducto = async (req, res) => {
  try {
    const [actualizado] = await Categoriaproducto.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Categoriasproducto desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Categoriasproducto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};