const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class PrecioProducto extends Model {}

PrecioProducto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    tipo_precio: {
        type: DataTypes.ENUM('COSTO', 'VENTA', 'MAYORISTA', 'PROMOCION'),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING(3),
        defaultValue: 'USD'
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'PrecioProducto',
    tableName: 'precios_productos',
    timestamps: false
});

PrecioProducto.associate = (models) => {
    
}

module.exports = PrecioProducto;