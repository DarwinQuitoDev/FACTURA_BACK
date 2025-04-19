const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CategoriaProducto = sequelize.define('CategoriaProducto', {
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
    tableName: 'categorias_productos',
    timestamps: false
});

// Auto-referential relationship
CategoriaProducto.belongsTo(CategoriaProducto, {
    foreignKey: 'categoria_padre_id',
    as: 'categoriaPadre'
});

CategoriaProducto.hasMany(CategoriaProducto, {
    foreignKey: 'categoria_padre_id',
    as: 'subcategorias'
});

module.exports = CategoriaProducto;