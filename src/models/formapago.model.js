const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class FormaPago extends Model {}

FormaPago.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_sri: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    dias_plazo: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'FormaPago',
    tableName: 'formas_pago',
    timestamps: false
});

FormaPago.associate = (models) => {
    FormaPago.hasMany(models.Compra, { foreignKey: 'forma_pago_id' });
    FormaPago.hasMany(models.Venta, { foreignKey: 'forma_pago_id' });
    FormaPago.hasMany(models.PagoCompra, { foreignKey: 'forma_pago_id' });
    FormaPago.hasMany(models.PagoVenta, { foreignKey: 'forma_pago_id' });
};

module.exports = FormaPago;