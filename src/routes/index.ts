import { Router } from 'express';

import ensureAuth from '../middlewares/ensureAuth'


import usersRouter from '../routes/user.routes'
import sessionRouter from '../routes/session.routes'


const routes =  Router();

routes.use('/user', usersRouter)
routes.use('/session', sessionRouter)

routes.get('/pong', ensureAuth,(req, res) => {
    console.log(req.user)
    return res.json({ pong: "ping" });
});

export default routes;

