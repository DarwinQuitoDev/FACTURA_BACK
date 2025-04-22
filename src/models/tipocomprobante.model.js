const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class TipoComprobante extends Model {}

TipoComprobante.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo_sri: { type: DataTypes.STRING(2), allowNull: false },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
    sequelize,
    modelName: 'TipoComprobante',
    tableName: 'tipos_comprobante',
    timestamps: false
});

TipoComprobante.associate = (models) => {
    TipoComprobante.hasMany(models.Venta, { foreignKey: 'tipo_comprobante_id' });
    TipoComprobante.hasMany(models.NumeracionSRI, { foreignKey: 'tipo_comprobante_id' });
};

module.exports = TipoComprobante;
