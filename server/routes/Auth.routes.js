const router = require('express').Router();
const authController = require("../controllers/Auth.controllers");

router.post("/validate",authController.validation)

module.exports = router;