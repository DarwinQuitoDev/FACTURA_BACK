const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class CodigoBarras extends Model { }

CodigoBarras.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    codigo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    nodelName: 'CodigoBarras',
    tableName: 'codigos_barras',
    timestamps: false
});

CodigoBarras.associate = (models) => {
    
}

module.exports = CodigoICE;