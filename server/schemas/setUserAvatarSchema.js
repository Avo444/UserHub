const Joi = require("joi");
const setUserAvatarSchema = Joi.object({
    file: Joi.object({
        originalname: Joi.string().required(),
        mimetype: Joi.string()
            .valid("image/jpeg", "image/webp", "image/png")
            .required(),
        buffer: Joi.binary().required(),
    })
        .unknown(true)
        .required()
        .messages({
            "any.required": "file is required",
        }),
});
module.exports = setUserAvatarSchema;
