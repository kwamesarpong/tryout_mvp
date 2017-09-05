import { Router } from 'express';

import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';

import * as testerController from './tester.controller';

import testerValidation from './tester.validations';

const routes = new Router();

routes.post('/signup', validate(testerValidation.signup), testerController.signUp);
routes.post('/login', authLocal, testerController.login);

export default routes;