const express = require("express");
const router = express.Router();
const Proveedor = require("../models/proveedor");

router.post("/", async (req, res) => {
  const data = await Proveedor.create(req.body);
  res.json(data);
});

router.get("/", async (req, res) => {
  const data = await Proveedor.find();
  res.json(data);
});


module.exports = router;