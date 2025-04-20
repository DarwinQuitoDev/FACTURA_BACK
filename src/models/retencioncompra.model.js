const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RetencionCompra = sequelize.define('RetencionCompra', {
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
    tableName: 'retenciones_compra',
    timestamps: false
});

module.exports = RetencionCompra;