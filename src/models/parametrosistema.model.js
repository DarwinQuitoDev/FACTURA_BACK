const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ParametroSistema = sequelize.define('ParametroSistema', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    valor: {
        type: DataTypes.TEXT
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    editable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'parametros_sistema',
    timestamps: false
});

module.exports = ParametroSistema;