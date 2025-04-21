const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Bodega extends Model{}

Bodega.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT
    },
    responsable_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    es_principal: {
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
    }
}, {
    sequelize,
    modelName: 'Bodega',
    tableName: 'bodegas',
    timestamps: false
});

Bodega.associate = (models) =>{
    
}

module.exports = Bodega;