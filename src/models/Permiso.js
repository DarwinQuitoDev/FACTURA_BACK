const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Permiso = sequelize.define('Permiso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modulo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    accion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'permisos',
    timestamps: false
});

module.exports = Permiso;