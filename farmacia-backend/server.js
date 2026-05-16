const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/proveedores", require("./routes/proveedor"));
app.use("/api/productos", require("./routes/producto"));
app.use("/api/ordenes", require("./routes/ordenCompra"));
app.use("/api/empleados", require("./routes/empleado"));

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});