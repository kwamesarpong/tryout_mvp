import testerRoutes from './tester/tester.routes';

import userRoutes from './user/user.routes';
// import { authJwt } from '../services/auth.services';

export default app => {
    app.use('/api/v1/tester', testerRoutes);
    app.use('/api/v1/user', userRoutes);
    /* app.get('/hello', authJwt, (req, res) => {
        res.send('This is a private route');
    }); */
};