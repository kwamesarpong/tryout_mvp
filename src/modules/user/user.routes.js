import { Router } from 'express';

import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';

import * as userController from './user.controller';

const routes = new Router();

routes.post('/usersignup', userController.userSignUp);

export default routes;