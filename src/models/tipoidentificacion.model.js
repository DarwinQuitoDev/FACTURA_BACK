const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class TipoIdentificacion extends Model {}

TipoIdentificacion.init({
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
    sequelize,
    modelName: 'TipoIdentificacion',
    tableName: 'tipos_identificacion',
    timestamps: false
});

TipoIdentificacion.associate = (models) => {
    
}

module.exports = TipoIdentificacion;