const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Producto extends Model {}

Producto.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo_principal: { type: DataTypes.STRING(50), allowNull: false },
    codigo_auxiliar: { type: DataTypes.STRING(50) },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    categoria_id: { type: DataTypes.INTEGER },
    unidad_medida_id: { type: DataTypes.INTEGER, allowNull: false },
    impuesto_id: { type: DataTypes.INTEGER },
    codigo_ice_id: { type: DataTypes.INTEGER },
    tipo_producto: { type: DataTypes.ENUM('BIEN', 'SERVICIO'), allowNull: false },
    iva_porcentaje: { type: DataTypes.DECIMAL(5,2), defaultValue: 12.00 },
    ice_porcentaje: { type: DataTypes.DECIMAL(5,2), defaultValue: 0 },
    irbpnr_porcentaje: { type: DataTypes.DECIMAL(5,2), defaultValue: 0 },
    stock_minimo: { type: DataTypes.DECIMAL(12,4), defaultValue: 0 },
    peso: { type: DataTypes.DECIMAL(10,4) },
    volumen: { type: DataTypes.DECIMAL(10,4) },
    imagen_url: { type: DataTypes.STRING(255) },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos',
    timestamps: false
});

Producto.associate = (models) => {
    Producto.belongsTo(models.CategoriaProducto, { foreignKey: 'categoria_id' });
    Producto.belongsTo(models.UnidadMedida, { foreignKey: 'unidad_medida_id' });
    Producto.belongsTo(models.Impuesto, { foreignKey: 'impuesto_id' });
    Producto.belongsTo(models.CodigoICE, { foreignKey: 'codigo_ice_id' });
    Producto.hasMany(models.PrecioProducto, { foreignKey: 'producto_id' });
    Producto.hasMany(models.CodigoBarras, { foreignKey: 'producto_id' });
};

module.exports = Producto;
