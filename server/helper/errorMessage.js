const errorMessage = (error) => {
    switch (error.code) {
        case 11000: {
            const key = Object.keys(error.keyValue)[0];
            return `${key} is already used!`;
        }
    }
};
module.exports = errorMessage;
