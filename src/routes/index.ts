import { Router } from 'express';


import usersRouter from '../routes/user.routes'
import sessionRouter from '../routes/session.routes'


const routes =  Router();

routes.use('/user', usersRouter)
routes.use('/session', sessionRouter)

routes.get('/pong', (req, res) => {
    return res.json({ pong: "ping" });
});

export default routes;

