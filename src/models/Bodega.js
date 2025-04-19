const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Bodega = sequelize.define('Bodega', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT
    },
    responsable_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    es_principal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'bodegas',
    timestamps: false
});

module.exports = Bodega;