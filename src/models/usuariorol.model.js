const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class UsuarioRol extends Model {}

UsuarioRol.init({
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    asignado_por: {
        type: DataTypes.INTEGER
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
    UsuarioRol.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    UsuarioRol.belongsTo(models.Rol, { foreignKey: 'rol_id' });
    UsuarioRol.belongsTo(models.Usuario, { foreignKey: 'asignado_por', as: 'asignadoPor' });
};

module.exports = UsuarioRol;
