const { Router } = require("express");
const router = Router();

const { search } = require("../controllers/search.controller");

router.route("/").get(search);

module.exports = router;
