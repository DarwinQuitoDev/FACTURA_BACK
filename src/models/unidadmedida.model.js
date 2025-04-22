const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class UnidadMedida extends Model {}

UnidadMedida.init({
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
    sequelize,
    modelName: 'UnidadMedida',
    tableName: 'unidades_medida',
    timestamps: false
});

UnidadMedida.associate = (models) => {
    UnidadMedida.hasMany(models.Producto, { foreignKey: 'unidad_medida_id' });
};

module.exports = UnidadMedida;
