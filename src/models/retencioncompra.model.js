const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class RetencionCompra extends Model {}

RetencionCompra.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    compra_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'compras',
            key: 'id'
        }
    },
    codigo_sri: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'Código de retención según SRI'
    },
    porcentaje: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    base_imponible: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    valor_retenido: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'RetencionCompra',
    tableName: 'retenciones_compra',
    timestamps: false
});

RetencionCompra.associate = (models) => {
    
}

module.exports = RetencionCompra;