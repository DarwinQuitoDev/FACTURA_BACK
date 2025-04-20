const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const NumeracionSRI = sequelize.define('NumeracionSRI', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    establecimiento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'establecimientos',
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
    numero_autorizacion: {
        type: DataTypes.STRING(49),
        allowNull: false
    },
    secuencial_inicial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    secuencial_final: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    secuencial_actual: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_caducidad: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'numeraciones_sri',
    timestamps: false
});

module.exports = NumeracionSRI;