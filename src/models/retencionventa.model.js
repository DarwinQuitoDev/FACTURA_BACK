const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class RetencionVenta extends Model {}

RetencionVenta.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    venta_id: { type: DataTypes.INTEGER, allowNull: false },
    codigo_sri: { type: DataTypes.STRING(10), allowNull: false },
    porcentaje: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    base_imponible: { type: DataTypes.DECIMAL(12,2), allowNull: false },
    valor_retenido: { type: DataTypes.DECIMAL(12,2), allowNull: false }
}, {
    sequelize,
    modelName: 'RetencionVenta',
    tableName: 'retenciones_venta',
    timestamps: false
});

RetencionVenta.associate = (models) => {
    RetencionVenta.belongsTo(models.Venta, { foreignKey: 'venta_id' });
};

module.exports = RetencionVenta;