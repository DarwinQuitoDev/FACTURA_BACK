const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class CodigoBarras extends Model {}

CodigoBarras.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    principal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'CodigoBarras',
    tableName: 'codigos_barras',
    timestamps: false
});

CodigoBarras.associate = (models) => {
    CodigoBarras.belongsTo(models.Producto, { foreignKey: 'producto_id' });
};

module.exports = CodigoBarras;