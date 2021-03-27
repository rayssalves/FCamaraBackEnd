import { Router } from 'express';


import usersRouter from '../routes/user.routes'

const routes =  Router();

routes.use('/user', usersRouter)
routes.get('/pong', (req, res) => {
    return res.json({ pong: "ping" });
});

export default routes;

