const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class DetalleVenta extends Model {}

DetalleVenta.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    venta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    descuento_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    },
    descuento_valor: {
        type: DataTypes.DECIMAL(12,4),
        defaultValue: 0
    },
    subtotal_sin_impuestos: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    iva_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 12.00
    },
    iva_valor: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    ice_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    },
    ice_valor: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    irbpnr_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    },
    irbpnr_valor: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    total: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'DetalleVenta',
    tableName: 'detalles_venta',
    timestamps: false
});

DetalleVenta.associate = (models) => {
    DetalleVenta.belongsTo(models.Venta, { foreignKey: 'venta_id' });
    DetalleVenta.belongsTo(models.Producto, { foreignKey: 'producto_id' });
};

module.exports = DetalleVenta;