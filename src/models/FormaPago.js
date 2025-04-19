const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FormaPago = sequelize.define('FormaPago', {
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
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    dias_plazo: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'formas_pago',
    timestamps: false
});

module.exports = FormaPago;