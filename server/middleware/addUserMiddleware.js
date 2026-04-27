const { sendResponse } = require("../helper");
const { addUserSchema } = require("../schemas");

const addUserMiddleware = async (req, res, next) => {
    try {
        const body = await addUserSchema.validateAsync({
            ...req.body,
            file: req.file,
        });
        res.locals.body = body;
        next();
    } catch (err) {
        sendResponse(res, err, 400);
    }
};

module.exports = addUserMiddleware;
