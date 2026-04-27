const errorMessage = require("./errorMessage");

const sendResponse = (res, data, statusCode = 200) => {
    let response = data;

    res.set({
        "Content-Type": "application/json",
    }).status(statusCode);

    if (data.errorResponse) {
        response = { error: errorMessage(data) };
    } else if (statusCode >= 400) {
        response = { error: data.message };
    }
    res.json(response);
};
module.exports = sendResponse;
