const Proveedor = require("../models/proveedor");

exports.crear = async (req, res) => {

  try {

    const data = await Proveedor.create(req.body);

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


exports.listar = async (req, res) => {

  try {

    const data = await Proveedor.find();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};