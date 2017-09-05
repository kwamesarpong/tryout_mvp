import Joi from 'joi';

export default {
    signup: {
        fullName: Joi.string().required(),
        companyName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        jobRole: Joi.string().required(),
        email: Joi.string().email().required(),
        
    }
}