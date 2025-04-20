const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    persona_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    nombre_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contrasena_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    intentos_fallidos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ultimo_login: {
        type: DataTypes.DATE
    },
    debe_cambiar_contrasena: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false
});

Usuario.associate = (models) => {
    //INFROMACION DEL USUARIO
    Usuario.belongsTo(models.Persona, { foreignKey: 'persona_id' }); // Asociación con Persona pertenencia
    //INFROMACION DE INVENTARIO
    Usuario.hasMany(models.MovimientoInventario, {foreignKey: 'usuario_id'}); // Asociación con movimientos
    Usuario.hasMany(models.Bodega, {foreignKey: 'responsable_id'}); // Asociación con Responsable Bodega
    //INFROMACION DE VENTAS Y COMPRAS
    Usuario.hasMany(models.Compra, {foreignKey: 'usuario_id'}); // Asociación con Compras
    Usuario.hasMany(models.Venta, {foreignKey: 'usuario_id'}); // Asociación con Ventas
    //INFORMACION DE ROLES
    Usuario.hasMany(models.UsuarioRol, {foreignKey: 'usuario_id'}); // Asociación con rol asignado
    Usuario.hasMany(models.UsuarioRol, {foreignKey: 'asignado_por'}) // Asociación con rol del asiganador
}


module.exports = Usuario;