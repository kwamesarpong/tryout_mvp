import mongoose, { Schema } from 'mongoose';

import validator from 'validator';

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required!'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Company Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required!'],
        trim: true,
    },
    jobRole: {
        type: String,
        required: [true, 'Job Role is required!'],
        trim: true,
    },
    testPreferences: {
        type: String,
        trim: true,
    },
});

export default mongoose.model('User', UserSchema);