const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class PagoCompra extends Model {}

PagoCompra.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    compra_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    forma_pago_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_pago: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    referencia: {
        type: DataTypes.STRING(50)
    },
    observaciones: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'PagoCompra',
    tableName: 'pagos_compra',
    timestamps: false
});

PagoCompra.associate = (models) => {
    PagoCompra.belongsTo(models.Compra, { foreignKey: 'compra_id' });
    PagoCompra.belongsTo(models.FormaPago, { foreignKey: 'forma_pago_id' });
};

module.exports = PagoCompra;
