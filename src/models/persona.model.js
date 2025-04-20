const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_identificacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tipos_identificacion',
            key: 'id'
        }
    },
    numero_identificacion: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    celular: {
        type: DataTypes.STRING(20)
    },
    correo_electronico: {
        type: DataTypes.STRING(100)
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    tipo_persona: {
        type: DataTypes.ENUM('NATURAL', 'JURIDICA'),
        allowNull: false
    },
    estado_civil: {
        type: DataTypes.ENUM('SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO', 'UNION_LIBRE')
    },
    genero: {
        type: DataTypes.ENUM('MASCULINO', 'FEMENINO', 'OTRO')
    },
    es_contribuyente: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    obligado_contabilidad: {
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
    tableName: 'personas',
    timestamps: false
});

module.exports = Persona;