const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class DocumentoElectronico extends Model {}

DocumentoElectronico.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    venta_id: {
        type: DataTypes.INTEGER
    },
    tipo_documento: {
        type: DataTypes.ENUM('FACTURA', 'NOTA_CREDITO', 'NOTA_DEBITO', 'RETENCION', 'GUIA_REMISION'),
        allowNull: false
    },
    clave_acceso: {
        type: DataTypes.STRING(49),
        allowNull: false
    },
    numero_autorizacion: {
        type: DataTypes.STRING(49)
    },
    fecha_autorizacion: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.ENUM('PENDIENTE', 'AUTORIZADO', 'RECHAZADO', 'EN_PROCESO'),
        defaultValue: 'PENDIENTE'
    },
    mensaje_respuesta: {
        type: DataTypes.TEXT
    },
    xml_generado: {
        type: DataTypes.TEXT('long')
    },
    xml_autorizado: {
        type: DataTypes.TEXT('long')
    },
    pdf_generado: {
        type: DataTypes.BLOB('long')
    },
    ambiente: {
        type: DataTypes.ENUM('PRUEBAS', 'PRODUCCION'),
        allowNull: false
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
    modelName: 'DocumentoElectronico',
    tableName: 'documentos_electronicos',
    timestamps: false
});

DocumentoElectronico.associate = (models) => {
    DocumentoElectronico.belongsTo(models.Venta, { foreignKey: 'venta_id' });
};

module.exports = DocumentoElectronico;