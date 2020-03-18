const router = require("express").Router();
const findPriceController = require("./../controllers/findPriceController")
router.route("/price")
  .get(findPriceController.find);

module.exports = router;