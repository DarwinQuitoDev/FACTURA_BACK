const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
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
    nombre_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contrasena_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    intentos_fallidos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ultimo_login: {
        type: DataTypes.DATE
    },
    debe_cambiar_contrasena: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;