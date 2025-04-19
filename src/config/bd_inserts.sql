-- 1. Tipos de Identificación
INSERT INTO tipos_identificacion (codigo, nombre, descripcion, longitud, patron_regex) VALUES
('01', 'Cédula', 'Documento de identidad personal', 10, '^[0-9]{10}$'),
('02', 'RUC', 'Registro Único de Contribuyentes', 13, '^[0-9]{13}$'),
('03', 'Pasaporte', 'Documento para viajes internacionales', 9, '^[A-Za-z0-9]{6,20}$');

-- 2. Personas (clientes, proveedores, usuarios)
INSERT INTO personas (tipo_identificacion_id, numero_identificacion, nombres, apellidos, direccion, telefono, correo_electronico, tipo_persona, es_contribuyente, activo) VALUES
(1, '1712345678', 'Juan Carlos', 'Pérez González', 'Av. Amazonas N23-45 y Veintimilla', '0987654321', 'juan.perez@email.com', 'NATURAL', TRUE, TRUE),
(1, '1723456789', 'María José', 'García López', 'Calle Guayas y Esmeraldas', '0998765432', 'maria.garcia@email.com', 'NATURAL', FALSE, TRUE),
(2, '1798765432001', 'Tecnologías Ecuador SA', 'Tecnologías Ecuador SA', 'Av. 6 de Diciembre N34-56', '022222222', 'info@tecnologia-ec.com', 'JURIDICA', TRUE, TRUE),
(2, '1791234567001', 'Distribuidora Comercial SC', 'Distribuidora Comercial SC', 'Av. Shyris N45-67', '023333333', 'ventas@distribuidora.com', 'JURIDICA', TRUE, TRUE),
(1, '1709876543', 'Carlos Andrés', 'Martínez Ruiz', 'Calle Foch E4-56', '0976543210', 'carlos.martinez@email.com', 'NATURAL', FALSE, TRUE);

-- 3. Usuarios del sistema
INSERT INTO usuarios (persona_id, nombre_usuario, correo, contrasena_hash, activo) VALUES
(1, 'jperez', 'juan.perez@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', TRUE),
(2, 'mgarcia', 'maria.garcia@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', TRUE),
(5, 'cmartinez', 'carlos.martinez@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', TRUE);

-- 4. Roles y permisos
INSERT INTO roles (nombre, descripcion, nivel_acceso, activo) VALUES
('Administrador', 'Acceso completo al sistema', 10, TRUE),
('Vendedor', 'Puede realizar ventas y consultas', 5, TRUE),
('Almacén', 'Gestiona inventario y compras', 7, TRUE);

INSERT INTO permisos (modulo, accion, descripcion, codigo, activo) VALUES
('usuarios', 'crear', 'Crear nuevos usuarios', 'usuarios.crear', TRUE),
('ventas', 'registrar', 'Registrar nuevas ventas', 'ventas.registrar', TRUE),
('inventario', 'gestionar', 'Gestionar productos e inventario', 'inventario.gestionar', TRUE);

INSERT INTO roles_permisos (rol_id, permiso_id) VALUES
(1, 1), (1, 2), (1, 3),
(2, 2),
(3, 3);

INSERT INTO usuarios_roles (usuario_id, rol_id, asignado_por) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);

-- 5. Empresa y establecimientos
INSERT INTO empresas (ruc, razon_social, nombre_comercial, direccion_matriz, telefono, email, obligado_contabilidad, agente_retencion) VALUES
('1790123456001', 'TecnoSoluciones CIA LTDA', 'TecnoSoluciones', 'Av. Amazonas N12-34 y Colón', '022345678', 'info@tecnosoluciones.com', TRUE, FALSE);

INSERT INTO establecimientos (empresa_id, codigo, nombre, direccion, es_matriz, activo) VALUES
(1, '001', 'Matriz', 'Av. Amazonas N12-34 y Colón', TRUE, TRUE),
(1, '002', 'Centro', 'Av. 6 de Diciembre N23-45', FALSE, TRUE);

-- 6. Puntos de emisión
INSERT INTO puntos_emision (codigo, nombre, direccion, activo) VALUES
('001', 'Principal', 'Av. Amazonas N12-34, local 1', TRUE),
('002', 'Secundario', 'Av. Amazonas N12-34, local 2', TRUE);

-- 7. Tipos de comprobante
INSERT INTO tipos_comprobante (codigo_sri, nombre, descripcion, activo) VALUES
('01', 'Factura', 'Documento que respalda una venta', TRUE),
('04', 'Nota de Crédito', 'Documento que modifica una factura a favor del comprador', TRUE);

-- 8. Numeraciones SRI
INSERT INTO numeraciones_sri (establecimiento_id, tipo_comprobante_id, numero_autorizacion, secuencial_inicial, secuencial_final, secuencial_actual, fecha_emision, fecha_caducidad) VALUES
(1, 1, '12345678901234567890123456789012345678901234567', 1, 1000, 1, '2023-01-01', '2023-12-31'),
(1, 2, '98765432109876543210987654321098765432109876543', 1, 500, 1, '2023-01-01', '2023-12-31');

-- 9. Formas de pago
INSERT INTO formas_pago (codigo_sri, nombre, descripcion, dias_plazo, activo) VALUES
('01', 'Efectivo', 'Pago en efectivo', 0, TRUE),
('16', 'Tarjeta de Débito', 'Pago con tarjeta de débito', 0, TRUE),
('19', 'Tarjeta de Crédito', 'Pago con tarjeta de crédito', 30, TRUE);

-- 10. Unidades de medida
INSERT INTO unidades_medida (codigo, nombre, simbolo, activo) VALUES
('UNI', 'Unidad', 'u', TRUE),
('KG', 'Kilogramo', 'kg', TRUE),
('LT', 'Litro', 'lt', TRUE),
('M', 'Metro', 'm', TRUE);

-- 11. Categorías de productos
INSERT INTO categorias_productos (nombre, descripcion, activo) VALUES
('Tecnología', 'Productos electrónicos y tecnológicos', TRUE),
('Oficina', 'Artículos de oficina', TRUE),
('Suministros', 'Suministros varios', TRUE);

INSERT INTO categorias_productos (nombre, descripcion, categoria_padre_id, activo) VALUES
('Computadoras', 'Computadoras y laptops', 1, TRUE),
('Impresoras', 'Impresoras y multifuncionales', 1, TRUE),
('Papelería', 'Artículos de papelería', 2, TRUE);

-- 12. Impuestos
INSERT INTO impuestos (codigo_sri, nombre, porcentaje, descripcion, activo) VALUES
('2', 'IVA 12%', 12.00, 'Impuesto al Valor Agregado', TRUE),
('0', 'IVA 0%', 0.00, 'Tasa cero de IVA', TRUE),
('3', 'ICE', 0.00, 'Impuesto a Consumos Especiales', TRUE);

-- 13. Códigos ICE
INSERT INTO codigos_ice (codigo, descripcion, porcentaje, activo) VALUES
('3001', 'Bebidas gaseosas', 10.00, TRUE),
('3002', 'Cigarrillos', 20.00, TRUE);

-- 14. Productos
INSERT INTO productos (codigo_principal, nombre, descripcion, categoria_id, unidad_medida_id, impuesto_id, tipo_producto, iva_porcentaje, stock_minimo, activo) VALUES
('PROD001', 'Laptop HP 15-dw1005la', 'Laptop HP 15.6", Intel Core i5, 8GB RAM, 512GB SSD', 4, 1, 1, 'BIEN', 12.00, 5, TRUE),
('PROD002', 'Impresora Epson L3150', 'Impresora multifuncional tanque de tinta', 5, 1, 1, 'BIEN', 12.00, 3, TRUE),
('PROD003', 'Resma de papel A4', 'Resma de papel bond A4 500 hojas 75g', 6, 1, 1, 'BIEN', 12.00, 10, TRUE),
('PROD004', 'Mouse inalámbrico', 'Mouse inalámbrico ergonómico', 1, 1, 1, 'BIEN', 12.00, 8, TRUE),
('PROD005', 'Servicio de instalación', 'Instalación de software y configuración', 1, 1, 2, 'SERVICIO', 0.00, 0, TRUE);

-- 15. Precios de productos
INSERT INTO precios_productos (producto_id, tipo_precio, precio, moneda, activo) VALUES
(1, 'COSTO', 650.00, 'USD', TRUE),
(1, 'VENTA', 799.00, 'USD', TRUE),
(1, 'MAYORISTA', 720.00, 'USD', TRUE),
(2, 'COSTO', 220.00, 'USD', TRUE),
(2, 'VENTA', 279.00, 'USD', TRUE),
(3, 'COSTO', 3.50, 'USD', TRUE),
(3, 'VENTA', 4.99, 'USD', TRUE),
(4, 'COSTO', 8.00, 'USD', TRUE),
(4, 'VENTA', 12.99, 'USD', TRUE),
(5, 'VENTA', 25.00, 'USD', TRUE);

-- 16. Códigos de barras
INSERT INTO codigos_barras (producto_id, codigo, principal) VALUES
(1, '123456789012', TRUE),
(2, '987654321098', TRUE),
(3, '456789123456', TRUE),
(4, '321654987321', TRUE);

-- 17. Bodegas
INSERT INTO bodegas (codigo, nombre, direccion, responsable_id, es_principal, activo) VALUES
('BOD001', 'Bodega Principal', 'Av. Amazonas N12-34, sótano', 1, TRUE, TRUE),
('BOD002', 'Bodega Secundaria', 'Av. Amazonas N12-34, piso 2', 2, FALSE, TRUE);

-- 18. Proveedores
INSERT INTO proveedores (persona_id, nombre_comercial, contacto_principal, telefono_contacto, email_contacto, plazo_pago, es_agente_retencion, activo) VALUES
(3, 'Tecnologías Ecuador', 'Ing. Roberto Sánchez', '022222222', 'compras@tecnologia-ec.com', 30, TRUE, TRUE),
(4, 'Distribuidora Comercial', 'Lic. Patricia Gómez', '023333333', 'pedidos@distribuidora.com', 15, FALSE, TRUE);

-- 19. Movimientos iniciales de inventario
INSERT INTO movimientos_inventario (producto_id, bodega_id, saldo_cantidad, documento_tipo, documento_id, tipo_movimiento, cantidad, costo_unitario, costo_total, usuario_id, costo_promedio, referencia) VALUES
(1, 1, 10, 'INICIAL', NULL, 'ENTRADA', 10, 650.00, 6500.00, 1, 650.00, 'Inventario inicial'),
(2, 1, 5, 'INICIAL', NULL, 'ENTRADA', 5, 220.00, 1100.00, 1, 220.00, 'Inventario inicial'),
(3, 1, 20, 'INICIAL', NULL, 'ENTRADA', 20, 3.50, 70.00, 1, 3.50, 'Inventario inicial'),
(4, 1, 15, 'INICIAL', NULL, 'ENTRADA', 15, 8.00, 120.00, 1, 8.00, 'Inventario initial'),
(1, 2, 3, 'INICIAL', NULL, 'ENTRADA', 3, 650.00, 1950.00, 1, 650.00, 'Inventario inicial bodega 2');

-- 20. Compras
INSERT INTO compras (proveedor_id, numero_factura, fecha_factura, fecha_recepcion, forma_pago_id, subtotal_sin_impuestos, descuento_total, subtotal_con_impuestos, iva_12, total, retencion_iva, retencion_renta, total_pagar, bodega_id, usuario_id) VALUES
(1, 'FAC-001-000123', '2023-05-10', '2023-05-11', 1, 1200.00, 0.00, 1200.00, 144.00, 1344.00, 144.00, 12.00, 1188.00, 1, 1),
(2, 'FAC-002-000456', '2023-05-15', '2023-05-15', 1, 350.00, 35.00, 315.00, 37.80, 352.80, 0.00, 0.00, 352.80, 1, 2);

-- 21. Detalles de compras
INSERT INTO detalles_compra (compra_id, producto_id, cantidad, precio_unitario, descuento_porcentaje, subtotal_sin_impuestos, iva_porcentaje, iva_valor, total) VALUES
(1, 1, 2, 600.00, 0.00, 1200.00, 12.00, 144.00, 1344.00),
(2, 3, 100, 3.50, 10.00, 350.00, 12.00, 37.80, 352.80);

-- 22. Movimientos de inventario por compras
INSERT INTO movimientos_inventario (producto_id, bodega_id, saldo_cantidad, documento_tipo, documento_id, tipo_movimiento, cantidad, costo_unitario, costo_total, usuario_id, costo_promedio, referencia) VALUES
(1, 1, 12, 'COMPRA', 1, 'ENTRADA', 2, 600.00, 1200.00, 1, 641.67, 'Compra FAC-001-000123'),
(3, 1, 120, 'COMPRA', 2, 'ENTRADA', 100, 3.15, 315.00, 2, 3.21, 'Compra FAC-002-000456');

-- 23. Retenciones de compras
INSERT INTO retenciones_compra (compra_id, codigo_sri, porcentaje, base_imponible, valor_retenido) VALUES
(1, '2', 100.00, 1200.00, 144.00),
(1, '1', 1.00, 1200.00, 12.00);

-- 24. Ventas
INSERT INTO ventas (cliente_id, punto_emision_id, tipo_comprobante_id, establecimiento, punto_emision_codigo, secuencial, fecha_emision, forma_pago_id, subtotal_sin_impuestos, descuento_total, subtotal_con_impuestos, iva_12, total, usuario_id) VALUES
(2, 1, 1, '001', '001', '000000001', '2023-05-12 10:30:00', 1, 803.99, 0.00, 803.99, 96.48, 900.47, 2),
(1, 1, 1, '001', '001', '000000002', '2023-05-13 15:45:00', 3, 283.99, 0.00, 283.99, 34.08, 318.07, 2);

-- 25. Detalles de ventas
INSERT INTO detalles_venta (venta_id, producto_id, cantidad, precio_unitario, subtotal_sin_impuestos, iva_porcentaje, iva_valor, total) VALUES
(1, 1, 1, 799.00, 799.00, 12.00, 95.88, 894.88),
(1, 4, 1, 12.99, 12.99, 12.00, 1.56, 14.55),
(2, 2, 1, 279.00, 279.00, 12.00, 33.48, 312.48),
(2, 3, 1, 4.99, 4.99, 12.00, 0.60, 5.59);

-- 26. Movimientos de inventario por ventas
INSERT INTO movimientos_inventario (producto_id, bodega_id, saldo_cantidad, documento_tipo, documento_id, tipo_movimiento, cantidad, costo_unitario, costo_total, usuario_id, costo_promedio, referencia) VALUES
(1, 1, 11, 'VENTA', 1, 'SALIDA', 1, 641.67, 641.67, 2, 641.67, 'Venta FAC-001-000001'),
(4, 1, 14, 'VENTA', 1, 'SALIDA', 1, 8.00, 8.00, 2, 8.00, 'Venta FAC-001-000001'),
(2, 1, 4, 'VENTA', 2, 'SALIDA', 1, 220.00, 220.00, 2, 220.00, 'Venta FAC-001-000002'),
(3, 1, 119, 'VENTA', 2, 'SALIDA', 1, 3.21, 3.21, 2, 3.21, 'Venta FAC-001-000002');

-- 27. Documentos electrónicos
INSERT INTO documentos_electronicos (venta_id, tipo_documento, clave_acceso, estado, ambiente, fecha_creacion) VALUES
(1, 'FACTURA', '1205202301179012345600110010000000011234567819', 'AUTORIZADO', 'PRODUCCION', '2023-05-12 10:35:00'),
(2, 'FACTURA', '1305202301179012345600110010000000021234567826', 'AUTORIZADO', 'PRODUCCION', '2023-05-13 15:50:00');

-- 28. Pagos de ventas
INSERT INTO pagos_venta (venta_id, forma_pago_id, valor, referencia) VALUES
(1, 1, 900.47, 'Pago en efectivo'),
(2, 3, 318.07, 'Tarjeta visa ****1234');

-- 29. Certificados digitales
INSERT INTO certificados_digitales (empresa_id, tipo, archivo_ruta, contraseña, fecha_emision, fecha_expiracion, activo) VALUES
(1, 'FIRMA', '/certificados/firma_tecnosoluciones.p12', 'contrasena123', '2023-01-01', '2024-01-01', TRUE);