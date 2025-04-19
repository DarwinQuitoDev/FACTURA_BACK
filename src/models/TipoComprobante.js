const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TipoComprobante = sequelize.define('TipoComprobante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_sri: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'tipos_comprobante',
    timestamps: false
});

module.exports = TipoComprobante;