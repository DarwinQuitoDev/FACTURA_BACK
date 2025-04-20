const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Venta = sequelize.define('Venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    punto_emision_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'puntos_emision',
            key: 'id'
        }
    },
    tipo_comprobante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tipos_comprobante',
            key: 'id'
        }
    },
    establecimiento: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'Ej: 001'
    },
    punto_emision_codigo: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'Ej: 001'
    },
    secuencial: {
        type: DataTypes.STRING(9),
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    fecha_autorizacion: {
        type: DataTypes.DATE
    },
    forma_pago_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    irbpnr: {
        type: DataTypes.DECIMAL(12,2),
        defaultValue: 0
    },
    total: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    clave_acceso: {
        type: DataTypes.STRING(49)
    },
    numero_autorizacion: {
        type: DataTypes.STRING(49)
    },
    estado_sri: {
        type: DataTypes.ENUM('PENDIENTE', 'AUTORIZADO', 'RECHAZADO', 'EN_PROCESO'),
        defaultValue: 'PENDIENTE'
    },
    mensaje_sri: {
        type: DataTypes.TEXT
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
    tableName: 'ventas',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['establecimiento', 'punto_emision_codigo', 'secuencial']
        }
    ]
});

module.exports = Venta;