const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PagoCompra = sequelize.define('PagoCompra', {
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
    tableName: 'pagos_compra',
    timestamps: false
});

module.exports = PagoCompra;