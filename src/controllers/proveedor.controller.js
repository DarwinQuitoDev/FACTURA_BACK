const Proveedor = require('../models/proveedor.model');

// Crear
exports.crearProveedor = async (req, res) => {
  try {
    const item = await Proveedor.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.obtenerProveedors = async (req, res) => {
  try {
    const items = await Proveedor.findAll({ where: { activo: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerProveedorPorId = async (req, res) => {
  try {
    const item = await Proveedor.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarProveedor = async (req, res) => {
  try {
    const [actualizado] = await Proveedor.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Proveedor.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Proveedor no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarProveedor = async (req, res) => {
  try {
    const [actualizado] = await Proveedor.update(
      { activo: false },
      { where: { id: req.params.id } }
    );
    if (actualizado) {
      return res.json({ mensaje: 'Proveedores desactivado correctamente (eliminación lógica).' });
    }
    res.status(404).json({ error: 'Proveedores no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};