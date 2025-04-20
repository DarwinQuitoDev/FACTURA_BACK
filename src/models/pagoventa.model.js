const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PagoVenta = sequelize.define('PagoVenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    venta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ventas',
            key: 'id'
        }
    },
    forma_pago_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'formas_pago',
            key: 'id'
        }
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
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
    tableName: 'pagos_venta',
    timestamps: false
});

module.exports = PagoVenta;