/*==============================================================*/
/* Table: bodegas                                               */
/*==============================================================*/
create table bodegas
(
   id                   INT not null auto_increment,
   codigo               VARCHAR(20) not null,
   nombre               VARCHAR(100) not null,
   direccion            TEXT,
   responsable_id       INT,
   telefono             VARCHAR(20),
   es_principal         BOOLEAN default FALSE,
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   primary key (id)
);

/*==============================================================*/
/* Table: categorias_productos                                  */
/*==============================================================*/
create table categorias_productos
(
   id                   INT not null auto_increment,
   nombre               VARCHAR(100) not null,
   descripcion          TEXT,
   categoria_padre_id   INT,
   codigo_sri           VARCHAR(10) comment 'Código de categoría para SRI',
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: certificados_digitales                                */
/*==============================================================*/
create table certificados_digitales
(
   id                   INT not null auto_increment,
   empresa_id           INT not null,
   tipo                 ENUM('FIRMA', 'SSL') not null,
   archivo_ruta         VARCHAR(255) not null,
   contraseña          VARCHAR(100) not null,
   fecha_emision        DATE not null,
   fecha_expiracion     DATE not null,
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   primary key (id)
);

/*==============================================================*/
/* Table: codigos_barras                                        */
/*==============================================================*/
create table codigos_barras
(
   id                   INT not null auto_increment,
   producto_id          INT not null,
   codigo               VARCHAR(50) not null,
   principal            BOOLEAN default FALSE,
   primary key (id)
);

/*==============================================================*/
/* Table: codigos_ice                                           */
/*==============================================================*/
create table codigos_ice
(
   id                   INT not null auto_increment,
   codigo               VARCHAR(10) not null,
   descripcion          TEXT not null,
   porcentaje           DECIMAL(5,2) not null,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: compras                                               */
/*==============================================================*/
create table compras
(
   id                   INT not null auto_increment,
   proveedor_id         INT not null,
   numero_factura       VARCHAR(50) not null,
   fecha_factura        DATE not null,
   fecha_recepcion      DATE not null,
   forma_pago_id        INT,
   subtotal_sin_impuestos DECIMAL(12,2) not null,
   descuento_total      DECIMAL(12,2) default 0,
   subtotal_con_impuestos DECIMAL(12,2) not null,
   iva_12               DECIMAL(12,2) default 0,
   iva_0                DECIMAL(12,2) default 0,
   ice                  DECIMAL(12,2) default 0,
   total                DECIMAL(12,2) not null,
   retencion_iva        DECIMAL(12,2) default 0,
   retencion_renta      DECIMAL(12,2) default 0,
   total_pagar          DECIMAL(12,2) not null,
   bodega_id            INT not null,
   observaciones        TEXT,
   usuario_id           INT not null,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: detalles_compra                                       */
/*==============================================================*/
create table detalles_compra
(
   id                   INT not null auto_increment,
   compra_id            INT not null,
   producto_id          INT not null,
   cantidad             DECIMAL(12,4) not null,
   precio_unitario      DECIMAL(12,4) not null,
   descuento_porcentaje DECIMAL(5,2) default 0,
   descuento_valor      DECIMAL(12,4) default 0,
   subtotal_sin_impuestos DECIMAL(12,2) not null,
   iva_porcentaje       DECIMAL(5,2) default 12.00,
   iva_valor            DECIMAL(12,2) default 0,
   ice_porcentaje       DECIMAL(5,2) default 0,
   ice_valor            DECIMAL(12,2) default 0,
   total                DECIMAL(12,2) not null,
   primary key (id)
);

/*==============================================================*/
/* Table: detalles_venta                                        */
/*==============================================================*/
create table detalles_venta
(
   id                   INT not null auto_increment,
   venta_id             INT not null,
   producto_id          INT not null,
   cantidad             DECIMAL(12,4) not null,
   precio_unitario      DECIMAL(12,4) not null,
   descuento_porcentaje DECIMAL(5,2) default 0,
   descuento_valor      DECIMAL(12,4) default 0,
   subtotal_sin_impuestos DECIMAL(12,2) not null,
   iva_porcentaje       DECIMAL(5,2) default 12.00,
   iva_valor            DECIMAL(12,2) default 0,
   ice_porcentaje       DECIMAL(5,2) default 0,
   ice_valor            DECIMAL(12,2) default 0,
   irbpnr_porcentaje    DECIMAL(5,2) default 0,
   irbpnr_valor         DECIMAL(12,2) default 0,
   total                DECIMAL(12,2) not null,
   primary key (id)
);

/*==============================================================*/
/* Table: documentos_electronicos                               */
/*==============================================================*/
create table documentos_electronicos
(
   id                   INT not null auto_increment,
   venta_id             INT,
   tipo_documento       ENUM('FACTURA', 'NOTA_CREDITO', 'NOTA_DEBITO', 'RETENCION', 'GUIA_REMISION') not null,
   clave_acceso         VARCHAR(49) not null,
   numero_autorizacion  VARCHAR(49),
   fecha_autorizacion   DATETIME,
   estado               ENUM('PENDIENTE', 'AUTORIZADO', 'RECHAZADO', 'EN_PROCESO') not null default 'PENDIENTE',
   mensaje_respuesta    TEXT,
   xml_generado         LONGTEXT,
   xml_autorizado       LONGTEXT,
   pdf_generado         LONGBLOB,
   ambiente             ENUM('PRUEBAS', 'PRODUCCION') not null,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: empresas                                              */
/*==============================================================*/
create table empresas
(
   id                   INT not null auto_increment,
   ruc                  VARCHAR(13) not null,
   razon_social         VARCHAR(100) not null,
   nombre_comercial     VARCHAR(100) not null,
   direccion_matriz     TEXT not null,
   telefono             VARCHAR(20),
   email                VARCHAR(100),
   website              VARCHAR(100),
   logo_url             VARCHAR(255),
   obligado_contabilidad BOOLEAN default TRUE,
   agente_retencion     BOOLEAN default FALSE,
   contribuyente_especial BOOLEAN default FALSE,
   resolucion_contribuyente VARCHAR(100),
   lleva_contabilidad   BOOLEAN default TRUE,
   fecha_inicio_actividades DATE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: establecimientos                                      */
/*==============================================================*/
create table establecimientos
(
   id                   INT not null auto_increment,
   empresa_id           INT not null,
   codigo               VARCHAR(3) not null comment 'Código del establecimiento (ej: 001)',
   nombre               VARCHAR(100) not null,
   direccion            TEXT not null,
   telefono             VARCHAR(20),
   email                VARCHAR(100),
   es_matriz            BOOLEAN default FALSE,
   activo               BOOLEAN default TRUE,
   primary key (id),
   unique key AK_Key_2 (empresa_id, codigo)
);

/*==============================================================*/
/* Table: formas_pago                                           */
/*==============================================================*/
create table formas_pago
(
   id                   INT not null auto_increment,
   codigo_sri           VARCHAR(2) not null,
   nombre               VARCHAR(50) not null,
   descripcion          TEXT,
   dias_plazo           INT default 0,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: impuestos                                             */
/*==============================================================*/
create table impuestos
(
   id                   INT not null auto_increment,
   codigo_sri           VARCHAR(5) not null,
   nombre               VARCHAR(100) not null,
   porcentaje           DECIMAL(5,2) not null,
   descripcion          TEXT,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: movimientos_inventario                                */
/*==============================================================*/
create table movimientos_inventario
(
   id                   INT not null auto_increment,
   producto_id          INT not null,
   bodega_id            INT not null,
   saldo_cantidad       DECIMAL(12,4) not null,
   fecha_movimiento     DATETIME default CURRENT_TIMESTAMP,
   documento_tipo       ENUM('COMPRA', 'VENTA', 'TRASLADO', 'AJUSTE', 'DEVOLUCION', 'INICIAL') not null,
   documento_id         INT comment 'ID del documento origen',
   tipo_movimiento      ENUM('ENTRADA', 'SALIDA') not null,
   cantidad             DECIMAL(12,4) not null,
   costo_unitario       DECIMAL(12,4) not null comment 'Costo unitario para entradas',
   costo_total          DECIMAL(12,4) not null,
   usuario_id           INT not null,
   saldo_costo          DECIMAL(12,4) not null,
   costo_promedio       DECIMAL(12,4) not null,
   referencia           VARCHAR(100),
   observaciones        TEXT,
   primary key (id),
   key AK_Key_2 (documento_tipo, documento_id),
   key AK_Key_3 (producto_id, bodega_id)
);

/*==============================================================*/
/* Table: numeraciones_sri                                      */
/*==============================================================*/
create table numeraciones_sri
(
   id                   INT not null auto_increment,
   establecimiento_id   INT not null,
   tipo_comprobante_id  INT not null,
   numero_autorizacion  VARCHAR(49) not null,
   secuencial_inicial   INT not null,
   secuencial_final     INT not null,
   secuencial_actual    INT not null,
   fecha_emision        DATE not null,
   fecha_caducidad      DATE not null,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: pagos_compra                                          */
/*==============================================================*/
create table pagos_compra
(
   id                   INT not null auto_increment,
   compra_id            INT not null,
   forma_pago_id        INT not null,
   fecha_pago           DATETIME not null default CURRENT_TIMESTAMP,
   valor                DECIMAL(12,2) not null,
   referencia           VARCHAR(50),
   observaciones        TEXT,
   primary key (id)
);

/*==============================================================*/
/* Table: pagos_venta                                           */
/*==============================================================*/
create table pagos_venta
(
   id                   INT not null auto_increment,
   venta_id             INT not null,
   forma_pago_id        INT not null,
   fecha_pago           DATETIME not null default CURRENT_TIMESTAMP,
   valor                DECIMAL(12,2) not null,
   referencia           VARCHAR(50),
   observaciones        TEXT,
   primary key (id)
);

/*==============================================================*/
/* Table: parametros_sistema                                    */
/*==============================================================*/
create table parametros_sistema
(
   id                   INT not null auto_increment,
   nombre               VARCHAR(100) not null,
   valor                TEXT,
   descripcion          TEXT,
   editable             BOOLEAN default TRUE,
   fecha_actualizacion  DATETIME default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   primary key (id)
);

/*==============================================================*/
/* Table: permisos                                              */
/*==============================================================*/
create table permisos
(
   id                   INT not null auto_increment,
   modulo               VARCHAR(50) not null,
   accion               VARCHAR(50) not null,
   descripcion          TEXT,
   codigo               VARCHAR(100) not null,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: personas                                              */
/*==============================================================*/
create table personas
(
   id                   INT not null auto_increment,
   tipo_identificacion_id INT not null,
   numero_identificacion VARCHAR(20) not null,
   nombres              VARCHAR(100) not null,
   apellidos            VARCHAR(100) not null,
   direccion            TEXT,
   telefono             VARCHAR(20),
   celular              VARCHAR(20),
   correo_electronico   VARCHAR(100),
   fecha_nacimiento     DATE,
   tipo_persona         ENUM('NATURAL', 'JURIDICA') not null,
   estado_civil         ENUM('SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO', 'UNION_LIBRE'),
   genero               ENUM('MASCULINO', 'FEMENINO', 'OTRO'),
   es_contribuyente     BOOLEAN default FALSE,
   obligado_contabilidad BOOLEAN default FALSE,
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id),
   unique key AK_Key_2 (tipo_identificacion_id, numero_identificacion)
)
COMMENT 'Tabla maestra de personas (clientes, proveedores, usuarios)';

/*==============================================================*/
/* Table: precios_productos                                     */
/*==============================================================*/
create table precios_productos
(
   id                   INT not null auto_increment,
   producto_id          INT not null,
   tipo_precio          ENUM('COSTO', 'VENTA', 'MAYORISTA', 'PROMOCION') not null,
   precio               DECIMAL(12,4) not null,
   moneda               VARCHAR(3) default 'USD',
   fecha_inicio         DATETIME default CURRENT_TIMESTAMP,
   fecha_fin            DATETIME,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: productos                                             */
/*==============================================================*/
create table productos
(
   id                   INT not null auto_increment,
   codigo_principal     VARCHAR(50) not null,
   codigo_auxiliar      VARCHAR(50),
   nombre               VARCHAR(255) not null,
   descripcion          TEXT,
   categoria_id         INT,
   unidad_medida_id     INT not null,
   impuesto_id          INT,
   codigo_ice_id        INT,
   tipo_producto        ENUM('BIEN', 'SERVICIO') not null,
   iva_porcentaje       DECIMAL(5,2) not null default 12.00,
   ice_porcentaje       DECIMAL(5,2) default 0,
   irbpnr_porcentaje    DECIMAL(5,2) default 0,
   stock_minimo         DECIMAL(12,4) default 0,
   peso                 DECIMAL(10,4) comment 'En kilogramos',
   volumen              DECIMAL(10,4) comment 'En metros cúbicos',
   imagen_url           VARCHAR(255),
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: proveedores                                           */
/*==============================================================*/
create table proveedores
(
   id                   INT not null auto_increment,
   persona_id           INT not null,
   nombre_comercial     VARCHAR(100),
   contacto_principal   VARCHAR(100),
   telefono_contacto    VARCHAR(20),
   email_contacto       VARCHAR(100),
   plazo_pago           INT default 30 comment 'Días de plazo para pago',
   limite_credito       DECIMAL(12,2),
   es_agente_retencion  BOOLEAN default FALSE,
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: puntos_emision                                        */
/*==============================================================*/
create table puntos_emision
(
   id                   INT not null auto_increment,
   codigo               VARCHAR(3) not null comment 'Código del punto de emisión (ej: 001)',
   nombre               VARCHAR(100) not null,
   direccion            TEXT,
   telefono             VARCHAR(20),
   activo               BOOLEAN default TRUE,
   primary key (id),
   unique key AK_Key_2 (codigo)
);

/*==============================================================*/
/* Table: retenciones_compra                                    */
/*==============================================================*/
create table retenciones_compra
(
   id                   INT not null auto_increment,
   compra_id            INT not null,
   codigo_sri           VARCHAR(10) not null comment 'Código de retención según SRI',
   porcentaje           DECIMAL(5,2) not null,
   base_imponible       DECIMAL(12,2) not null,
   valor_retenido       DECIMAL(12,2) not null,
   primary key (id)
);

/*==============================================================*/
/* Table: retenciones_venta                                     */
/*==============================================================*/
create table retenciones_venta
(
   id                   INT not null auto_increment,
   venta_id             INT not null,
   codigo_sri           VARCHAR(10) not null comment 'Código de retención según SRI',
   porcentaje           DECIMAL(5,2) not null,
   base_imponible       DECIMAL(12,2) not null,
   valor_retenido       DECIMAL(12,2) not null,
   primary key (id)
);

/*==============================================================*/
/* Table: roles                                                 */
/*==============================================================*/
create table roles
(
   id                   INT not null auto_increment,
   nombre               VARCHAR(50) not null,
   descripcion          TEXT,
   nivel_acceso         INT default 1,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: roles_permisos                                        */
/*==============================================================*/
create table roles_permisos
(
   rol_id               INT not null,
   permiso_id           INT not null,
   primary key (rol_id, permiso_id)
);

/*==============================================================*/
/* Table: tipos_comprobante                                     */
/*==============================================================*/
create table tipos_comprobante
(
   id                   INT not null auto_increment,
   codigo_sri           VARCHAR(2) not null,
   nombre               VARCHAR(100) not null,
   descripcion          TEXT,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: tipos_identificacion                                  */
/*==============================================================*/
create table tipos_identificacion
(
   id                   INT not null auto_increment,
   codigo               VARCHAR(20) not null,
   nombre               VARCHAR(50) not null,
   descripcion          VARCHAR(100),
   longitud             INT not null,
   patron_regex         VARCHAR(100) not null,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: unidades_medida                                       */
/*==============================================================*/
create table unidades_medida
(
   id                   INT not null auto_increment,
   codigo               VARCHAR(10) not null,
   nombre               VARCHAR(50) not null,
   simbolo              VARCHAR(10) not null,
   activo               BOOLEAN default TRUE,
   primary key (id)
);

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios
(
   id                   INT not null auto_increment,
   persona_id           INT not null,
   nombre_usuario       VARCHAR(50) not null,
   correo               VARCHAR(100) not null,
   contrasena_hash      VARCHAR(255) not null,
   intentos_fallidos    INT default 0,
   ultimo_login         DATETIME,
   debe_cambiar_contrasena BOOLEAN default TRUE,
   activo               BOOLEAN default TRUE,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id)
);

/*==============================================================*/
/* Table: usuarios_roles                                        */
/*==============================================================*/
create table usuarios_roles
(
   usuario_id           INT not null,
   rol_id               INT not null,
   asignado_por         INT,
   fecha_asignacion     DATETIME default CURRENT_TIMESTAMP,
   primary key (usuario_id, rol_id)
);

/*==============================================================*/
/* Table: ventas                                                */
/*==============================================================*/
create table ventas
(
   id                   INT not null auto_increment,
   cliente_id           INT not null,
   punto_emision_id     INT not null,
   tipo_comprobante_id  INT not null,
   establecimiento      VARCHAR(3) not null comment 'Ej: 001',
   punto_emision_codigo VARCHAR(3) not null comment 'Ej: 001',
   secuencial           VARCHAR(9) not null,
   fecha_emision        DATETIME not null default CURRENT_TIMESTAMP,
   fecha_autorizacion   DATETIME,
   forma_pago_id        INT not null,
   subtotal_sin_impuestos DECIMAL(12,2) not null,
   descuento_total      DECIMAL(12,2) default 0,
   subtotal_con_impuestos DECIMAL(12,2) not null,
   iva_12               DECIMAL(12,2) default 0,
   iva_0                DECIMAL(12,2) default 0,
   ice                  DECIMAL(12,2) default 0,
   irbpnr               DECIMAL(12,2) default 0,
   total                DECIMAL(12,2) not null,
   clave_acceso         VARCHAR(49),
   numero_autorizacion  VARCHAR(49),
   estado_sri           ENUM('PENDIENTE', 'AUTORIZADO', 'RECHAZADO', 'EN_PROCESO') default 'PENDIENTE',
   mensaje_sri          TEXT,
   observaciones        TEXT,
   usuario_id           INT not null,
   fecha_creacion       DATETIME default CURRENT_TIMESTAMP,
   fecha_actualizacion  DATETIME,
   primary key (id),
   unique key AK_Key_2 (establecimiento, punto_emision_codigo, secuencial)
);

alter table bodegas add constraint FK_Reference_14 foreign key (responsable_id)
      references personas (id);

alter table categorias_productos add constraint FK_Reference_8 foreign key (categoria_padre_id)
      references categorias_productos (id);

alter table certificados_digitales add constraint FK_Reference_43 foreign key (empresa_id)
      references empresas (id);

alter table codigos_barras add constraint FK_Reference_13 foreign key (producto_id)
      references productos (id);

alter table compras add constraint FK_Reference_33 foreign key (proveedor_id)
      references proveedores (id);

alter table compras add constraint FK_Reference_34 foreign key (forma_pago_id)
      references formas_pago (id);

alter table compras add constraint FK_Reference_35 foreign key (bodega_id)
      references bodegas (id);

alter table compras add constraint FK_Reference_36 foreign key (usuario_id)
      references usuarios (id);

alter table detalles_compra add constraint FK_Reference_37 foreign key (compra_id)
      references compras (id);

alter table detalles_compra add constraint FK_Reference_38 foreign key (producto_id)
      references productos (id);

alter table detalles_venta add constraint FK_Reference_26 foreign key (venta_id)
      references ventas (id);

alter table detalles_venta add constraint FK_Reference_27 foreign key (producto_id)
      references productos (id);

alter table documentos_electronicos add constraint FK_Reference_31 foreign key (venta_id)
      references ventas (id);

alter table establecimientos add constraint FK_Reference_42 foreign key (empresa_id)
      references empresas (id);

alter table movimientos_inventario add constraint FK_Reference_15 foreign key (producto_id)
      references productos (id);

alter table movimientos_inventario add constraint FK_Reference_16 foreign key (bodega_id)
      references bodegas (id);

alter table movimientos_inventario add constraint FK_Reference_17 foreign key (usuario_id)
      references usuarios (id);

alter table numeraciones_sri add constraint FK_Reference_44 foreign key (establecimiento_id)
      references establecimientos (id);

alter table numeraciones_sri add constraint FK_Reference_45 foreign key (tipo_comprobante_id)
      references tipos_comprobante (id);

alter table pagos_compra add constraint FK_Reference_40 foreign key (compra_id)
      references compras (id);

alter table pagos_compra add constraint FK_Reference_41 foreign key (forma_pago_id)
      references formas_pago (id);

alter table pagos_venta add constraint FK_Reference_29 foreign key (venta_id)
      references ventas (id);

alter table pagos_venta add constraint FK_Reference_30 foreign key (forma_pago_id)
      references formas_pago (id);

alter table personas add constraint FK_Reference_1 foreign key (tipo_identificacion_id)
      references tipos_identificacion (id);

alter table precios_productos add constraint FK_Reference_20 foreign key (producto_id)
      references productos (id);

alter table productos add constraint FK_Reference_10 foreign key (unidad_medida_id)
      references unidades_medida (id);

alter table productos add constraint FK_Reference_11 foreign key (impuesto_id)
      references impuestos (id);

alter table productos add constraint FK_Reference_12 foreign key (codigo_ice_id)
      references codigos_ice (id);

alter table productos add constraint FK_Reference_9 foreign key (categoria_id)
      references categorias_productos (id);

alter table proveedores add constraint FK_Reference_32 foreign key (persona_id)
      references personas (id);

alter table retenciones_compra add constraint FK_Reference_39 foreign key (compra_id)
      references compras (id);

alter table retenciones_venta add constraint FK_Reference_28 foreign key (venta_id)
      references ventas (id);

alter table roles_permisos add constraint FK_Reference_3 foreign key (rol_id)
      references roles (id);

alter table roles_permisos add constraint FK_Reference_4 foreign key (permiso_id)
      references permisos (id);

alter table usuarios add constraint FK_Reference_2 foreign key (persona_id)
      references personas (id);

alter table usuarios_roles add constraint FK_Reference_5 foreign key (usuario_id)
      references usuarios (id);

alter table usuarios_roles add constraint FK_Reference_6 foreign key (rol_id)
      references roles (id);

alter table usuarios_roles add constraint FK_Reference_7 foreign key (asignado_por)
      references usuarios (id);

alter table ventas add constraint FK_Reference_21 foreign key (cliente_id)
      references personas (id);

alter table ventas add constraint FK_Reference_22 foreign key (punto_emision_id)
      references puntos_emision (id);

alter table ventas add constraint FK_Reference_23 foreign key (tipo_comprobante_id)
      references tipos_comprobante (id);

alter table ventas add constraint FK_Reference_24 foreign key (forma_pago_id)
      references formas_pago (id);

alter table ventas add constraint FK_Reference_25 foreign key (usuario_id)
      references usuarios (id);