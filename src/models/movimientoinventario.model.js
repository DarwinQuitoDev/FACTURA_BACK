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
        allowNull: false
    },
    bodega_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        type: DataTypes.INTEGER
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
        allowNull: false
    },
    costo_total: {
        type: DataTypes.DECIMAL(12,4),
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    timestamps: false
});

MovimientoInventario.associate = (models) => {
    MovimientoInventario.belongsTo(models.Producto, { foreignKey: 'producto_id' });
    MovimientoInventario.belongsTo(models.Bodega, { foreignKey: 'bodega_id' });
    MovimientoInventario.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
};

module.exports = MovimientoInventario;
