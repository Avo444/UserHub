const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            unique: true,
            required: true,
        },
        storage: {
            type: String,
            required: true,
        },
        images: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true },
);

usersSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = model("users", usersSchema);
