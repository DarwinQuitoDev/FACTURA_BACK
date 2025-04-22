
// Crear
exports.crearCompra = async (req, res) => {
  try {
    const item = await Compra.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const { Compra, DetalleCompra, Producto, sequelize } = require('../models');

// Crear una compra con detalles
exports.crearDetallecompra = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { detalles, ...datosCompra } = req.body;

    if (!detalles || !Array.isArray(detalles) || detalles.length === 0) {
      return res.status(400).json({ error: 'La compra debe tener al menos un detalle.' });
    }

    // Crear la compra
    const nuevaCompra = await Compra.create(datosCompra, { transaction: t });

    // Crear los detalles
    const detallesCompra = await Promise.all(detalles.map(async (detalle) => {
      // (Opcional) Verifica si el producto existe
      const producto = await Producto.findByPk(detalle.producto_id, { transaction: t });
      if (!producto) throw new Error(`Producto con ID ${detalle.producto_id} no existe.`);

      return await DetalleCompra.create({
        ...detalle,
        compra_id: nuevaCompra.id
      }, { transaction: t });
    }));

    await t.commit();
    return res.status(201).json({
      compra: nuevaCompra,
      detalles: detallesCompra
    });

  } catch (error) {
    await t.rollback();
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};


// Obtener todos
exports.obtenerCompras = async (req, res) => {
  try {
    const items = await Compra.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
exports.obtenerCompraPorId = async (req, res) => {
  try {
    const item = await Compra.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Compra no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarCompra = async (req, res) => {
  try {
    const [actualizado] = await Compra.update(req.body, {
      where: { id: req.params.id }
    });
    if (actualizado) {
      const actualizadoItem = await Compra.findByPk(req.params.id);
      return res.json(actualizadoItem);
    }
    res.status(404).json({ error: 'Compra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarCompra = async (req, res) => {
  try {
    const eliminado = await Compra.destroy({
      where: { id: req.params.id }
    });
    if (eliminado) return res.json({ mensaje: 'Compra eliminado correctamente' });
    res.status(404).json({ error: 'Compra no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
