const Producto = require('../models/producto.model');

// Crear
exports.crearProducto = async (req, res) => {
  try {
    const item = await Producto.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerProductos = async (req, res) => {
  try {
    const items = await Producto.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const item = await Producto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarProducto = async (req, res) => {
  try {
    const [actualizado] = await Producto.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Producto.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarProducto = async (req, res) => {
  try {
    const [actualizado] = await Producto.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Producto desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};