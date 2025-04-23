// src/app.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Asegúrate de que esta ruta es correcta

// Middleware
const authMiddleware = require('./middlewares/auth');

// Importación de rutas de nuevo
const authRoutes = require('./routes/auth.routes');
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

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Rutas públicas
app.use('/api/auth', authRoutes);

// Rutas protegidas (requieren autenticación)
app.use('/api/usuario', authMiddleware, usuarioRoutes);
app.use('/api/compra', authMiddleware, compraRoutes);
app.use('/api/producto', authMiddleware, productoRoutes);
app.use('/api/detallecompra', authMiddleware, detalleCompraRoutes);
app.use('/api/bodega', authMiddleware, bodegaRoutes);
app.use('/api/categoriaproducto', authMiddleware, categoriaProductoRoutes);
app.use('/api/certificadodigital', authMiddleware, certificadoDigitalRoutes);
app.use('/api/codigobarras', authMiddleware, codigoBarrasRoutes);
app.use('/api/codigoice', authMiddleware, codigoICERoutes);
app.use('/api/detalleventa', authMiddleware, detalleVentaRoutes);
app.use('/api/documentoelectronico', authMiddleware, documentoElectronicoRoutes);
app.use('/api/empresa', authMiddleware, empresaRoutes);
app.use('/api/establecimiento', authMiddleware, establecimientoRoutes);
app.use('/api/formapago', authMiddleware, formapagoRoutes);
app.use('/api/impuesto', authMiddleware, impuestoRoutes);
app.use('/api/movimientoinventario', authMiddleware, movimientoInventarioRoutes);
app.use('/api/numeracionsri', authMiddleware, numeracionSRIRoutes);
app.use('/api/pagocompra', authMiddleware, pagoCompraRoutes);
app.use('/api/pagoventa', authMiddleware, pagoVentaRoutes);
app.use('/api/parametrosistema', authMiddleware, parametroSistemaRoutes);
app.use('/api/permiso', authMiddleware, permisoRoutes);
app.use('/api/persona', authMiddleware, personaRoutes);
app.use('/api/precioproducto', authMiddleware, precioProductoRoutes);
app.use('/api/proveedor', authMiddleware, proveedorRoutes);
app.use('/api/puntoemision', authMiddleware, puntoEmisionRoutes);
app.use('/api/retencioncompra', authMiddleware, retencionCompraRoutes);
app.use('/api/retencionventa', authMiddleware, retencionVentaRoutes);
app.use('/api/rol', authMiddleware, rolRoutes);
app.use('/api/rolpermiso', authMiddleware, rolPermisoRoutes);
app.use('/api/tipocomprobante', authMiddleware, tipoComprobanteRoutes);
app.use('/api/tipoidentificacion', authMiddleware, tipoIdentificacionRoutes);
app.use('/api/unidadmedida', authMiddleware, unidadMedidaRoutes);
app.use('/api/usuariorol', authMiddleware, usuarioRolRoutes);
app.use('/api/venta', authMiddleware, ventaRoutes);

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
