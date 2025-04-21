const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Compra extends Model {}

Compra.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    proveedor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'proveedores',
            key: 'id'
        }
    },
    numero_factura: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fecha_factura: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_recepcion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    forma_pago_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'formas_pago',
            key: 'id'
        }
    },
    subtotal_sin_impuestos: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    descuento_total: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    subtotal_con_impuestos: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    iva_12: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    iva_0: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    ice: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    total: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    retencion_iva: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    retencion_renta: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    total_pagar: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    bodega_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bodegas',
            key: 'id'
        }
    },
    observaciones: {
        type: DataTypes.TEXT
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    nodelName: 'Compra',
    tableName: 'compras',
    timestamps: false
});

Compra.associate = (models) => {
    
}

module.exports = Compra;