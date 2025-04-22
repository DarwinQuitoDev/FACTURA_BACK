// src/app.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Asegúrate de que esta ruta es correcta

// Importación de rutas de nuevo
const usuarioRoutes = require('./routes/usuario.routes');
const compraRoutes = require('./routes/compra.routes');
const productoRoutes = require('./routes/producto.routes');
const detalleCompraRoutes = require('./routes/detallecompra.routes');
const bodegaRoutes = require('./routes/bodega.routes');
const categoriaProductoRoutes = require('./routes/categoriaproducto.routes');
const certificadoDigitalRoutes = require('./routes/certificadodigital.routes');
const codigoBarrasRoutes = require('./routes/codigobarras.routes');
const codigoICERoutes = require('./routes/codigoICE.routes');
const detalleVentaRoutes = require('./routes/detalleventa.routes');
const documentoElectronicoRoutes = require('./routes/documentoelectronico.routes');
const empresaRoutes = require('./routes/empresa.routes');
const establecimientoRoutes = require('./routes/establecimiento.routes');
const formapagoRoutes = require('./routes/formapago.routes');
const impuestoRoutes = require('./routes/impuesto.routes');
const movimientoInventarioRoutes = require('./routes/movimientoinventario.routes');
const numeracionSRIRoutes = require('./routes/numeracionSRI.routes');
const pagoCompraRoutes = require('./routes/pagocompra.routes');
const pagoVentaRoutes = require('./routes/pagoventa.routes');
const parametroSistemaRoutes = require('./routes/parametrosistema.routes');
const permisoRoutes = require('./routes/permiso.routes');
const personaRoutes = require('./routes/persona.routes');
const precioProductoRoutes = require('./routes/precioproducto.routes');
const proveedorRoutes = require('./routes/proveedor.routes');
const puntoEmisionRoutes = require('./routes/puntoemision.routes');
const retencionCompraRoutes = require('./routes/retencioncompra.routes');
const retencionVentaRoutes = require('./routes/retencionventa.routes');
const rolRoutes = require('./routes/rol.routes');
const rolPermisoRoutes = require('./routes/rolpermiso.routes');
const tipoComprobanteRoutes = require('./routes/tipocomprobante.routes');
const tipoIdentificacionRoutes = require('./routes/tipoidentificacion.routes');
const unidadMedidaRoutes = require('./routes/unidadmedida.routes');
const usuarioRolRoutes = require('./routes/usuariorol.routes');
const ventaRoutes = require('./routes/venta.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/compra', compraRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/detallecompra', detalleCompraRoutes);
app.use('/api/bodega', bodegaRoutes);
app.use('/api/categoriaproducto', categoriaProductoRoutes);
app.use('/api/certificadodigital', certificadoDigitalRoutes);
app.use('/api/codigobarras', codigoBarrasRoutes);
app.use('/api/codigoice', codigoICERoutes);
app.use('/api/detalleventa', detalleVentaRoutes);
app.use('/api/documentoelectronico', documentoElectronicoRoutes);
app.use('/api/empresa', empresaRoutes);
app.use('/api/establecimiento', establecimientoRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/impuesto', impuestoRoutes);
app.use('/api/movimientoinventario', movimientoInventarioRoutes);
app.use('/api/numeracionsri', numeracionSRIRoutes);
app.use('/api/pagocompra', pagoCompraRoutes);
app.use('/api/pagoventa', pagoVentaRoutes);
app.use('/api/parametrosistema', parametroSistemaRoutes);
app.use('/api/permiso', permisoRoutes);
app.use('/api/persona', personaRoutes);
app.use('/api/precioproducto', precioProductoRoutes);
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/puntoemision', puntoEmisionRoutes);
app.use('/api/retencioncompra', retencionCompraRoutes);
app.use('/api/retencionventa', retencionVentaRoutes);
app.use('/api/rol', rolRoutes);
app.use('/api/rolpermiso', rolPermisoRoutes);
app.use('/api/tipocomprobante', tipoComprobanteRoutes);
app.use('/api/tipoidentificacion', tipoIdentificacionRoutes);
app.use('/api/unidadmedida', unidadMedidaRoutes);
app.use('/api/usuariorol', usuarioRolRoutes);
app.use('/api/venta', ventaRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
