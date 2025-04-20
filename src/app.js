const express = require('express');
const cors = require('cors');
const db = require('./config/db');

// Importar rutas
const usuariosRoutes = require('./routes/usuarios.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
app.use((req, res, next) => {
  req.db = db; // Asegúrate de que db está correctamente configurado
  next();
});

// Rutas
app.use('/api/usuarios', usuariosRoutes)

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;