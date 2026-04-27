const Joi = require("joi");
const addUserSchema = Joi.object({
    name: Joi.string().min(3).max(12).required().messages({
        "string.base": "Name must be a string!",
        "string.min": "Name must be greater than 3 letters!",
        "string.max": "Name must be less than 12 letters!",
        "string.empty": "Name is required!",
        "any.required": "Name is required!",
    }),

    email: Joi.string().email().required().messages({
        "string.email": "Invalid email!",
        "string.empty": "Email is required!",
        "any.required": "Email is required!",
    }),

    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
        .required()
        .messages({
            "string.pattern.base":
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
            "string.empty": "Password is required",
            "any.required": "Password is required",
        }),

    storage: Joi.string().valid("multer", "drive").required().messages({
        "any.only": "Storage must be 'multer' or 'drive'",
        "any.required": "Choose storage!",
    }),

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
module.exports = addUserSchema;
