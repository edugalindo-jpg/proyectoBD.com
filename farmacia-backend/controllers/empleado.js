const Empleado = require("../models/empleado");

exports.crear = async (req, res) => {

  try {

    const data = await Empleado.create(req.body);

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};
exports.listar = async (req, res) => {

  try {

    const data = await Empleado.find();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};