const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class CategoriaProducto extends Model {}

CategoriaProducto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    categoria_padre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categorias_productos',
            key: 'id'
        }
    },
    codigo_sri: {
        type: DataTypes.STRING(10)
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'CategoriaProducto',
    tableName: 'categorias_productos',
    timestamps: false
});

CategoriaProducto.associate = (models) => {
    CategoriaProducto.belongsTo(models.CategoriaProducto, { foreignKey: 'categoria_padre_id', as: 'padre' });
    CategoriaProducto.hasMany(models.Producto, { foreignKey: 'categoria_id' });
};

module.exports = CategoriaProducto;
