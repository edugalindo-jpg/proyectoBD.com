const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  email: String
});
module.exports = mongoose.model("Empleado", EmpleadoSchema);