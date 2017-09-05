import Joi from 'joi';

export const passwordReg = /.{8,}/;

export default {
    signup: {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(passwordReg).required(),
        
    }
}