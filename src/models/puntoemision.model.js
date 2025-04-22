const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class PuntoEmision extends Model {}

PuntoEmision.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'PuntoEmision',
    tableName: 'puntos_emision',
    timestamps: false
});

PuntoEmision.associate = (models) => {
    PuntoEmision.hasMany(models.Venta, { foreignKey: 'punto_emision_id' });
};

module.exports = PuntoEmision;
