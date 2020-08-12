const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "response", "municipality", "admin"],
    },
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
}, { timestamps: true });

module.exports = model("users", UserSchema);