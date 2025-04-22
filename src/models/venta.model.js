const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Venta extends Model {}

Venta.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    punto_emision_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_comprobante_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    establecimiento: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    punto_emision_codigo: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    secuencial: {
        type: DataTypes.STRING(9),
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_autorizacion: {
        type: DataTypes.DATE
    },
    forma_pago_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        allowNull: false
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
    modelName: 'Venta',
    tableName: 'ventas',
    timestamps: false
});

Venta.associate = (models) => {
    Venta.belongsTo(models.Persona, { foreignKey: 'cliente_id', as: 'cliente' });
    Venta.belongsTo(models.PuntoEmision, { foreignKey: 'punto_emision_id' });
    Venta.belongsTo(models.FormaPago, { foreignKey: 'forma_pago_id' });
    Venta.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    Venta.belongsTo(models.TipoComprobante, { foreignKey: 'tipo_comprobante_id' });
    Venta.hasMany(models.DetalleVenta, { foreignKey: 'venta_id' });
    Venta.hasOne(models.DocumentoElectronico, { foreignKey: 'venta_id' });
    Venta.hasMany(models.PagoVenta, { foreignKey: 'venta_id' });
    Venta.hasMany(models.RetencionVenta, { foreignKey: 'venta_id' });
};

module.exports = Venta;
