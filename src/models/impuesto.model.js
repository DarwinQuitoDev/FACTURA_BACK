const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Impuesto extends Model {}

Impuesto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_sri: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    porcentaje: {
        type: DataTypes.DECIMAL(5,2),
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
    sequelize,
    modelName: 'Impuesto',
    tableName: 'impuestos',
    timestamps: false
});

Impuesto.associate = (models) => {
    
}

module.exports = Impuesto;