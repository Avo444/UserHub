const { sendResponse } = require("../helper");
const { setUserAvatarSchema } = require("../schemas");

const setUserAvatarMiddleware = async (req, res, next) => {
    try {
        const body = await setUserAvatarSchema.validateAsync({
            file: req.file,
        });
        res.locals.body = body;
        next();
    } catch (err) {
        sendResponse(res, err, 400);
    }
};

module.exports = setUserAvatarMiddleware;
