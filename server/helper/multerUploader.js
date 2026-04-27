const path = require("path");
const fs = require("fs").promises;

const multerUploader = async (file, filename, avatar) => {
    if (avatar) {
        await fs.unlink(path.join(__dirname, "..", "uploads", avatar));
    }
    await fs.writeFile(
        path.join(__dirname, "..", "uploads", filename),
        file.buffer,
    );
    return filename;
};
module.exports = multerUploader;
