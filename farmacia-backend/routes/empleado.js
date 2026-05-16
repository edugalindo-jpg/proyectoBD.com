const express = require("express");
const router = express.Router();
const Empleado = require("../models/empleado");

router.post("/", async (req, res) => {
  const data = await Empleado.create(req.body);
  res.json(data);
});


router.get("/", async (req, res) => {
  const data = await Empleado.find();
  res.json(data);
});

module.exports = router;