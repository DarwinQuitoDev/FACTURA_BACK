const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class CodigoICE extends Model {}

CodigoICE.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'CodigoICE',
    tableName: 'codigos_ice',
    timestamps: false
});

CodigoICE.associate = (models) => {
    CodigoICE.hasMany(models.Producto, { foreignKey: 'codigo_ice_id' });
};

module.exports = CodigoICE;