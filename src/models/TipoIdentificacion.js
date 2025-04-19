const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TipoIdentificacion = sequelize.define('TipoIdentificacion', {
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
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100)
    },
    longitud: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    patron_regex: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'tipos_identificacion',
    timestamps: false
});

module.exports = TipoIdentificacion;