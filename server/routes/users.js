const { upload } = require("../helper");
const { userController } = require("../controllers");
const { addUserMiddleware, setUserAvatarMiddleware } = require("../middleware");

const express = require("express");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post(
    "/",
    upload.single("file"),
    addUserMiddleware,
    userController.addUserData,
);

router.patch(
    "/:id",
    upload.single("file"),
    setUserAvatarMiddleware,
    userController.setUserAvatar,
);
module.exports = router;
