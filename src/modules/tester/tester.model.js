import mongoose, { Schema } from 'mongoose';

import validator from 'validator';

import { hashSync, compareSync } from 'bcrypt-nodejs';

// import jwt from 'jsonwebtoken';

import { passwordReg } from './tester.validations';

// import constants from '../../config/constants';


const TesterSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required!'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required!'],
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Phone Number is required!'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [8, 'Password should be more than 8 characters'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!',
        },
    },
});

TesterSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});

TesterSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateTester(password) {
        return compareSync(password, this.password);
    },
    /* createToken() {
        return jwt.sign(
            {
                _id: this._id,
            },
            constants.JWT_SECRET,
        );
    },
    toJSON() {
        return {
            _id: this._id,
            firstName: this.firstName,
            token: `JWT ${this.createToken()}`,
            email: this.email,
        };
    }, */
};

export default mongoose.model('Tester', TesterSchema);