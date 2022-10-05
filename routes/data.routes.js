const express = require("express");
const router = express.Router();
const { dataController } = require("../controllers");
const { dataValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');



router.route("/").get(dataController.getPraktikan);
router.route("/:nama").get(dataValidation.getPraktikanByName, dataController.getPraktikanByName);
router.route("/:email/:telepon").get(dataValidation.getPraktikanByEmailAndTelepon, dataController.getPraktikanByEmailAndTelepon);
router.route("/insert").post(dataValidation.insertData, dataController.insertData);
router.route("/delete").delete(dataValidation.deleteData, dataController.deleteData);
router.route("/update").patch(dataValidation.updateData, dataController.updateData);
router.route("/insertBulk").post(dataValidation.insertBulkData, dataController.insertBulkData);


module.exports = router;