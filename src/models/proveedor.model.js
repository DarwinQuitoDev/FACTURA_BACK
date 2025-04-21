const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Proveedor extends Model {}

Proveedor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    persona_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    nombre_comercial: {
        type: DataTypes.STRING(100)
    },
    contacto_principal: {
        type: DataTypes.STRING(100)
    },
    telefono_contacto: {
        type: DataTypes.STRING(20)
    },
    email_contacto: {
        type: DataTypes.STRING(100)
    },
    plazo_pago: {
        type: DataTypes.INTEGER,
        defaultValue: 30,
        comment: 'Días de plazo para pago'
    },
    limite_credito: {
        type: DataTypes.DECIMAL(12,2)
    },
    es_agente_retencion: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
    modelName: 'Proveedor',
    tableName: 'proveedores',
    timestamps: false
});

Proveedor.associate = (models) => {
    
}

module.exports = Proveedor;