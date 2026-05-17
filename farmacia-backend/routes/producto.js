const express = require("express");
const router = express.Router();

const Producto = require("../models/producto");

router.post("/", async (req, res) => {

  const data = await Producto.create(req.body);

  res.json(data);

});

router.get("/", async (req, res) => {

  const data = await Producto.find();

  res.json(data);

});

router.get("/:nombre", async (req, res) => {

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

});

module.exports = router;