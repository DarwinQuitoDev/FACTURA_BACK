const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Producto extends Model {}

Producto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_principal: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    codigo_auxiliar: {
        type: DataTypes.STRING(50)
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categorias_productos',
            key: 'id'
        }
    },
    unidad_medida_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'unidades_medida',
            key: 'id'
        }
    },
    impuesto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'impuestos',
            key: 'id'
        }
    },
    codigo_ice_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'codigos_ice',
            key: 'id'
        }
    },
    tipo_producto: {
        type: DataTypes.ENUM('BIEN', 'SERVICIO'),
        allowNull: false
    },
    iva_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false,
        defaultValue: 12.00
    },
    ice_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    },
    irbpnr_porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    },
    stock_minimo: {
        type: DataTypes.DECIMAL(12,4),
        defaultValue: 0
    },
    peso: {
        type: DataTypes.DECIMAL(10,4),
        comment: 'En kilogramos'
    },
    volumen: {
        type: DataTypes.DECIMAL(10,4),
        comment: 'En metros cúbicos'
    },
    imagen_url: {
        type: DataTypes.STRING(255)
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
    modelName: 'Producto',
    tableName: 'productos',
    timestamps: false
});

Producto.associate = (models) => {
    
}

module.exports = Producto;