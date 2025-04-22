const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class CertificadoDigital extends Model {}

CertificadoDigital.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_expiracion: {
        type: DataTypes.DATE,
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
    sequelize,
    modelName: 'CertificadoDigital',
    tableName: 'certificados_digitales',
    timestamps: false
});

CertificadoDigital.associate = (models) => {
    CertificadoDigital.belongsTo(models.Empresa, { foreignKey: 'empresa_id' });
};

module.exports = CertificadoDigital;