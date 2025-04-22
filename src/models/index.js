const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};

// Cargar todos los modelos de forma dinámica
fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Ejecutar asociaciones si existen
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;