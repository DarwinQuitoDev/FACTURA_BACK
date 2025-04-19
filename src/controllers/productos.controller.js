const db = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM productos");
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM productos WHERE id_producto = ?", [req.params.id]);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { codigo, nombre, tipo_producto, porcentaje_iva } = req.body;
  await db.query("INSERT INTO productos (codigo, nombre, tipo_producto, porcentaje_iva) VALUES (?, ?, ?, ?)",
    [codigo, nombre, tipo_producto, porcentaje_iva]);
  res.status(201).json({ mensaje: "Producto creado" });
};

exports.update = async (req, res) => {
  const { nombre, tipo_producto } = req.body;
  await db.query("UPDATE productos SET nombre = ?, tipo_producto = ? WHERE id_producto = ?",
    [nombre, tipo_producto, req.params.id]);
  res.json({ mensaje: "Producto actualizado" });
};

exports.remove = async (req, res) => {
  await db.query("DELETE FROM productos WHERE id_producto = ?", [req.params.id]);
  res.json({ mensaje: "Producto eliminado" });
};
