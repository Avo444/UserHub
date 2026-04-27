const {
    sendResponse,
    multerUploader,
    imageFormatter,
    driveUploader,
} = require("../helper");

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await req.app.locals.services.users.getAllUsers();
            sendResponse(res, users);
        } catch (err) {
            sendResponse(res, err, 500);
        }
    }

    async addUserData(req, res) {
        try {
            const { body } = res.locals;
            const file = body.file;
            const filename = imageFormatter(body.name, body.file.originalname);

            delete body.file;
            if (body.storage === "multer") {
                body.avatar = await multerUploader(file, filename);
            } else if (body.storage === "drive") {
                body.avatar = await driveUploader(file, filename);
            }

            const user = await req.app.locals.services.users.addUserData(body);
            sendResponse(res, user);
        } catch (err) {
            console.log(err);
            sendResponse(res, err, 500);
        }
    }
}
module.exports = new UserController();
