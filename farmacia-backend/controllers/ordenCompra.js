const Orden = require("../models/ordenCompra");

exports.crear = async (req, res) => {

  try {

    let sumaTotal = 0;

    const productosCalculados = req.body.productos.map(p => {

      const precioTotal = p.cantidad * p.precioUnitario;

      sumaTotal += precioTotal;
      return {
        producto: p.producto,
        cantidad: p.cantidad,
        precioUnitario: p.precioUnitario,
        precioTotal
      };

    });

    const orden = new Orden({
      empleado: req.body.empleado,
      proveedor: req.body.proveedor,
      productos: productosCalculados,
      sumaTotal
    });

    await orden.save();

    res.json({
      mensaje: "Orden registrada",
      orden
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.listar = async (req, res) => {

  try {

    const data = await Orden.find()
      .populate("empleado")
      .populate("proveedor")
      .populate("productos.producto");

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};