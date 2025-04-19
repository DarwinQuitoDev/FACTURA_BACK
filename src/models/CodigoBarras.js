const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CodigoBarras = sequelize.define('CodigoBarras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    codigo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'codigos_ice',
    timestamps: false
});

module.exports = CodigoICE;