const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Permiso extends Model {}

Permiso.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modulo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    accion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Permiso',
    tableName: 'permisos',
    timestamps: false
});

Permiso.associate = (models) => {
    Permiso.belongsToMany(models.Rol, {
        through: models.RolPermiso,
        foreignKey: 'permiso_id'
    });
};

module.exports = Permiso;
