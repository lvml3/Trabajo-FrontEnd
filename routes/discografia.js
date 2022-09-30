const express = require("express");
const router = express.Router();
const productsModel = require("../models/productsModel");

router.get("/", async (req, res, next) => {
  const discografia = await productsModel.getDiscografia();
  res.render("discografia", { discografia });
});

module.exports = router;