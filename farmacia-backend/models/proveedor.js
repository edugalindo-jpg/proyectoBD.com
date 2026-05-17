const mongoose = require("mongoose");

const ProveedorSchema = new mongoose.Schema({
  nombre: String,
  ruc: String,
  telefono: String,
  direccion: String
});

module.exports = mongoose.model("Proveedor", ProveedorSchema);