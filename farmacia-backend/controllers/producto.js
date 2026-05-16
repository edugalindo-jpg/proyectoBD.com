const Producto = require("../models/producto");

exports.crear = async (req, res) => {

  try {

    const data = await Producto.create(req.body);

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });
  }
};

exports.listar = async (req, res) => {

  try {

    const data = await Producto.find();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.buscarPorNombre = async (req, res) => {

  try {

    const producto = await Producto.findOne({
      nombre: req.params.nombre
    });

    if (!producto) {

      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });

    }

    res.json(producto);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};