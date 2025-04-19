const Bodega = require('./Bodega');
const CategoriaProducto = require('./CategoriaProducto');
const CertificadoDigital = require('./CertificadoDigital');
const CodigoICE = require('./CodigoICE');
const Compra = require('./Compra');
const DetalleCompra = require('./DetalleCompra');
const DetalleVenta = require('./DetalleVenta');
const DocumentoElectronico = require('./DocumentoElectronico');
const Empresa = require('./Empresa');
const Establecimiento = require('./Establecimiento');
const FormaPago = require('./FormaPago');
const Impuesto = require('./Impuesto');
const MovimientoInventario = require('./MovimientoInventario');
const Permiso = require('./Permiso');
const Persona = require('./Persona');
const Producto = require('./Producto');
const PuntoEmision = require('./PuntoEmision');
const Rol = require('./Rol');
const RolPermiso = require('./RolPermiso');
const TipoIdentificacion = require('./TipoIdentificacion');
const UnidadMedida = require('./UnidadMedida');
const Usuario = require('./Usuario');
const Venta = require('./Venta');
const NumeracionSRI = require('./NumeracionSRI');
const PrecioProducto = require('./PrecioProducto');
const TipoComprobante = require('./TipoComprobante');
const PagoVenta = require('./PagoVenta');
const PagoCompra = require('./PagoCompra');
const RetencionVenta = require('./RetencionVenta');
const RetencionCompra = require('./RetencionCompra');
const ParametroSistema = require('./ParametroSistema');
const Proveedor = require('./Proveedor');
const UsuarioRol = require('./UsuarioRol');

// Relationships

// Persona relationships
Persona.belongsTo(TipoIdentificacion, { foreignKey: 'tipo_identificacion_id' });
Persona.hasMany(Usuario, { foreignKey: 'persona_id' });
Persona.hasMany(Bodega, { foreignKey: 'responsable_id', as: 'bodegasACargo' });
Persona.hasOne(Proveedor, { foreignKey: 'persona_id' });

// Usuario relationships
Usuario.belongsTo(Persona, { foreignKey: 'persona_id' });
Usuario.belongsToMany(Rol, { 
    through: UsuarioRol,
    foreignKey: 'usuario_id'
});

// Rol relationships
Rol.belongsToMany(Usuario, { 
    through: UsuarioRol,
    foreignKey: 'rol_id'
});
Rol.belongsToMany(Permiso, { through: RolPermiso, foreignKey: 'rol_id' });

// Permiso relationships
Permiso.belongsToMany(Rol, { through: RolPermiso, foreignKey: 'permiso_id' });

// Producto relationships
Producto.belongsTo(CategoriaProducto, { foreignKey: 'categoria_id' });
Producto.belongsTo(UnidadMedida, { foreignKey: 'unidad_medida_id' });
Producto.belongsTo(Impuesto, { foreignKey: 'impuesto_id' });
Producto.belongsTo(CodigoICE, { foreignKey: 'codigo_ice_id' });
Producto.hasMany(PrecioProducto, { foreignKey: 'producto_id', as: 'precios' });

// Empresa relationships
Empresa.hasMany(CertificadoDigital, { foreignKey: 'empresa_id' });
Empresa.hasMany(Establecimiento, { foreignKey: 'empresa_id' });

// Venta relationships
Venta.belongsTo(Persona, { foreignKey: 'cliente_id', as: 'cliente' });
Venta.belongsTo(PuntoEmision, { foreignKey: 'punto_emision_id' });
Venta.belongsTo(FormaPago, { foreignKey: 'forma_pago_id' });
Venta.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Venta.belongsTo(TipoComprobante, { foreignKey: 'tipo_comprobante_id' });
Venta.hasMany(DetalleVenta, { foreignKey: 'venta_id' });
Venta.hasOne(DocumentoElectronico, { foreignKey: 'venta_id' });
Venta.hasMany(PagoVenta, { foreignKey: 'venta_id', as: 'pagos' });
Venta.hasMany(RetencionVenta, { foreignKey: 'venta_id', as: 'retenciones' });

// DetalleVenta relationships
DetalleVenta.belongsTo(Venta, { foreignKey: 'venta_id' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'producto_id' });

// Compra relationships
Compra.belongsTo(Persona, { foreignKey: 'proveedor_id', as: 'proveedor' });
Compra.belongsTo(FormaPago, { foreignKey: 'forma_pago_id' });
Compra.belongsTo(Bodega, { foreignKey: 'bodega_id' });
Compra.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Compra.hasMany(DetalleCompra, { foreignKey: 'compra_id' });
Compra.hasMany(PagoCompra, { foreignKey: 'compra_id', as: 'pagos' });
Compra.hasMany(RetencionCompra, { foreignKey: 'compra_id', as: 'retenciones' });

// DetalleCompra relationships
DetalleCompra.belongsTo(Compra, { foreignKey: 'compra_id' });
DetalleCompra.belongsTo(Producto, { foreignKey: 'producto_id' });

// MovimientoInventario relationships
MovimientoInventario.belongsTo(Producto, { foreignKey: 'producto_id' });
MovimientoInventario.belongsTo(Bodega, { foreignKey: 'bodega_id' });
MovimientoInventario.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// NumeracionSRI relationships
NumeracionSRI.belongsTo(Establecimiento, { foreignKey: 'establecimiento_id' });
NumeracionSRI.belongsTo(TipoComprobante, { foreignKey: 'tipo_comprobante_id' });

// PagoVenta relationships
PagoVenta.belongsTo(Venta, { foreignKey: 'venta_id' });
PagoVenta.belongsTo(FormaPago, { foreignKey: 'forma_pago_id' });

// PagoCompra relationships
PagoCompra.belongsTo(Compra, { foreignKey: 'compra_id' });
PagoCompra.belongsTo(FormaPago, { foreignKey: 'forma_pago_id' });

// RetencionVenta relationships
RetencionVenta.belongsTo(Venta, { foreignKey: 'venta_id' });

// RetencionCompra relationships
RetencionCompra.belongsTo(Compra, { foreignKey: 'compra_id' });

// Proveedor relationships
Proveedor.belongsTo(Persona, { foreignKey: 'persona_id' });

// UsuarioRol relationships
UsuarioRol.belongsTo(Usuario, { 
    foreignKey: 'asignado_por',
    as: 'asignadoPor'
});

module.exports = {
    Bodega,
    CategoriaProducto,
    CertificadoDigital,
    CodigoICE,
    Compra,
    DetalleCompra,
    DetalleVenta,
    DocumentoElectronico,
    Empresa,
    Establecimiento,
    FormaPago,
    Impuesto,
    MovimientoInventario,
    Permiso,
    Persona,
    Producto,
    PuntoEmision,
    Rol,
    RolPermiso,
    TipoIdentificacion,
    UnidadMedida,
    Usuario,
    Venta,
    NumeracionSRI,
    PrecioProducto,
    TipoComprobante,
    PagoVenta,
    PagoCompra,
    RetencionVenta,
    RetencionCompra,
    ParametroSistema,
    Proveedor,
    UsuarioRol
};