const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CertificadoDigital = sequelize.define('CertificadoDigital', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empresas',
            key: 'id'
        }
    },
    tipo: {
        type: DataTypes.ENUM('FIRMA', 'SSL'),
        allowNull: false
    },
    archivo_ruta: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_expiracion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'certificados_digitales',
    timestamps: false
});

module.exports = CertificadoDigital;