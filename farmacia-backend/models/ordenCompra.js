const mongoose = require("mongoose");

const OrdenCompraSchema = new mongoose.Schema({
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true
  },
  proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proveedor",
    required: true
  },
  

  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto"
      },
      cantidad: Number,
      precioUnitario: Number,
      precioTotal: Number
    }
  ],

  sumaTotal: Number,

  fecha: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("OrdenCompra", OrdenCompraSchema);