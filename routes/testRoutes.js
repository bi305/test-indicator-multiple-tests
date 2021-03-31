const router = require("express").Router();
const testController = require("../controllers/testController");

router.post("/store", testController.store);
router.get("/", testController.index);

module.exports = router;
