//WHat is schema?
// just like table in sql - key value pairs - json object - what we are expecting
// changes can be made at any time


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],

    }
}, { timestamps: true })

const userModel = mongoose.model('users', userSchema)

export default userModel