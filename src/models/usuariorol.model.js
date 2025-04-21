const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class UsuarioRol extends Model {}

UsuarioRol.init({
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    asignado_por: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    fecha_asignacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'UsuarioRol',
    tableName: 'usuarios_roles',
    timestamps: false
});

UsuarioRol.associate = (models) => {
    
}

module.exports = UsuarioRol;