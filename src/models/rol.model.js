const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Rol extends Model {}

Rol.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(50), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    nivel_acceso: { type: DataTypes.INTEGER, defaultValue: 1 },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
    sequelize,
    modelName: 'Rol',
    tableName: 'roles',
    timestamps: false
});

Rol.associate = (models) => {
    Rol.belongsToMany(models.Usuario, {
        through: models.UsuarioRol,
        foreignKey: 'rol_id'
    });
    Rol.belongsToMany(models.Permiso, {
        through: models.RolPermiso,
        foreignKey: 'rol_id'
    });
};

module.exports = Rol;
