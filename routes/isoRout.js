const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const isoController = require("../controller/isoController");
const router = express.Router();

router.route("/")
.post(upload.array('files',12),isoController.writeData);

module.exports = router;
