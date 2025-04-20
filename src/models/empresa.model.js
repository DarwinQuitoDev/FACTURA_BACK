const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empresa = sequelize.define('Empresa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ruc: {
        type: DataTypes.STRING(13),
        allowNull: false,
        unique: true
    },
    razon_social: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombre_comercial: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion_matriz: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true
        }
    },
    website: {
        type: DataTypes.STRING(100)
    },
    logo_url: {
        type: DataTypes.STRING(255)
    },
    obligado_contabilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    agente_retencion: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    contribuyente_especial: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    resolucion_contribuyente: {
        type: DataTypes.STRING(100)
    },
    lleva_contabilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_inicio_actividades: {
        type: DataTypes.DATEONLY
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'empresas',
    timestamps: false
});

module.exports = Empresa;