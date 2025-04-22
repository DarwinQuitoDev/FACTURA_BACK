const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const modelDef = require(path.join(__dirname, file));

    let model;

    // Si el modelo es una clase (modelo clásico Sequelize extendido)
    if (typeof modelDef === 'function' && modelDef.prototype instanceof Sequelize.Model) {
      model = modelDef;
      model.init(model.rawAttributes || {}, {
        sequelize,
        modelName: model.name,
        tableName: model.tableName || undefined,
        timestamps: false
      });
    } else {
      // Si el modelo es una función que retorna un modelo (formato factory)
      model = modelDef(sequelize, DataTypes);
    }

    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
