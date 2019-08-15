const { Router } = require("express");
const router = Router();

const {
  getProduct,
  getProducts
} = require("../controllers/product.controller");

router.route("/").get(getProducts);

router.route("/:id").get(getProduct);

module.exports = router;
