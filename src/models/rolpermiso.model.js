const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class RolPermiso extends Model {}

RolPermiso.init({
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    permiso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'RolPermiso',
    tableName: 'roles_permisos',
    timestamps: false
});

RolPermiso.associate = (models) => {
    RolPermiso.belongsTo(models.Rol, { foreignKey: 'rol_id' });
    RolPermiso.belongsTo(models.Permiso, { foreignKey: 'permiso_id' });
};

module.exports = RolPermiso;
