const { Sequelize,DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class ParametroSistema extends Model {}

ParametroSistema.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    valor: {
        type: DataTypes.TEXT
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    editable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'ParametroSistema',
    tableName: 'parametros_sistema',
    timestamps: false
});

ParametroSistema.associate = (models) => {
    
}

module.exports = ParametroSistema;