const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UnidadMedida = sequelize.define('UnidadMedida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    simbolo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'unidades_medida',
    timestamps: false
});

module.exports = UnidadMedida;