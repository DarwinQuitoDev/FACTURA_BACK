const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetalleCompra = sequelize.define('DetalleCompra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    compra_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'compras',
            key: 'id'
        }
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
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
    total: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    }
}, {
    tableName: 'detalles_compra',
    timestamps: false
});

module.exports = DetalleCompra;