// src/app.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Asegúrate de que esta ruta es correcta

// Importación de rutas
const usuarioRoutes = require('./routes/usuario.routes');
const compraRoutes = require('./routes/compra.routes');
const productoRoutes = require('./routes/producto.routes');
const detalleCompraRoutes = require('./routes/detallecompra.routes');

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
app.use('/api/usuario', usuarioRoutes);
app.use('/api/compra', compraRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/detallecompra', detalleCompraRoutes);

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
