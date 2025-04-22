const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class PagoVenta extends Model {}

PagoVenta.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    venta_id: {
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
    modelName: 'PagoVenta',
    tableName: 'pagos_venta',
    timestamps: false
});

PagoVenta.associate = (models) => {
    PagoVenta.belongsTo(models.Venta, { foreignKey: 'venta_id' });
    PagoVenta.belongsTo(models.FormaPago, { foreignKey: 'forma_pago_id' });
};

module.exports = PagoVenta;
