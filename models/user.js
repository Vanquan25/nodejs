import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        minLength: 10,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true});

export default mongoose.model('User', userSchema);