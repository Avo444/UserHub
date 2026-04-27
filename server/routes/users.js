const { upload } = require("../helper");
const { userController } = require("../controllers");
const { addUserMiddleware } = require("../middleware");

const express = require("express");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post(
    "/",
    upload.single("file"),
    addUserMiddleware,
    userController.addUserData,
);
module.exports = router;
