const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class RolPermiso extends Model {}

RolPermiso.init({
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    permiso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'permisos',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'RolPermiso',
    tableName: 'roles_permisos',
    timestamps: false
});

RolPermiso.associate = (models) => {
    
}

module.exports = RolPermiso;