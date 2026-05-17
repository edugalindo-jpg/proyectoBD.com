const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proveedor"
  }
});

module.exports = mongoose.model("Producto", ProductoSchema);