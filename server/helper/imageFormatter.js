const path = require("path");

const imageFormatter = (name, originalname) =>
    `${Date.now()}-${name}${path.extname(originalname)}`;

module.exports = imageFormatter;
