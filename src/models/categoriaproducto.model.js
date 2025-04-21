const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class CategoriaProducto extends Model { }

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
        type: DataTypes.STRING(10),
        comment: 'Código de categoría para SRI'
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
    CategoriaProducto.belongsTo(models.CategoriaProducto, { foreignKey: 'categoria_padre_id', as: 'categoriaPadre' });
    CategoriaProducto.hasMany(models.CategoriaProducto, { foreignKey: 'categoria_padre_id', as: 'subcategorias' });
    CategoriaProducto.hasMany(models.Productos, { foreignKey: 'id', as: 'categoria_id' })
}


module.exports = CategoriaProducto;