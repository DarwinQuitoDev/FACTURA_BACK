const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Establecimiento extends Model {}

Establecimiento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empresas',
            key: 'id'
        }
    },
    codigo: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'Código del establecimiento (ej: 001)'
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true
        }
    },
    es_matriz: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Establecimiento',
    tableName: 'establecimientos',
    timestamps: false,
});

Establecimiento.associate = (models) => {
    
}

module.exports = Establecimiento;