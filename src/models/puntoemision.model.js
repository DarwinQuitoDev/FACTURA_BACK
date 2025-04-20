const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PuntoEmision = sequelize.define('PuntoEmision', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'Código del punto de emisión (ej: 001)'
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'puntos_emision',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['codigo']
        }
    ]
});

module.exports = PuntoEmision;