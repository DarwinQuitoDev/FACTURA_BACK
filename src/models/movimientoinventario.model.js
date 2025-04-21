const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class MovimientoInventario extends Model {}

MovimientoInventario.init({
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
    bodega_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bodegas',
            key: 'id'
        }
    },
    saldo_cantidad: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    fecha_movimiento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    documento_tipo: {
        type: DataTypes.ENUM('COMPRA', 'VENTA', 'TRASLADO', 'AJUSTE', 'DEVOLUCION', 'INICIAL'),
        allowNull: false
    },
    documento_id: {
        type: DataTypes.INTEGER,
        comment: 'ID del documento origen'
    },
    tipo_movimiento: {
        type: DataTypes.ENUM('ENTRADA', 'SALIDA'),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    costo_unitario: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false,
        comment: 'Costo unitario para entradas'
    },
    costo_total: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    saldo_costo: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    costo_promedio: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    referencia: {
        type: DataTypes.STRING(100)
    },
    observaciones: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'MovimientoInventario',
    tableName: 'movimientos_inventario',
    timestamps: false,
});

MovimientoInventario.associate = (models) => {
    
}

module.exports = MovimientoInventario;