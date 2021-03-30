import { Router } from 'express';

//import ensureAuth from '../middlewares/ensureAuth'


import usersRouter from '../routes/user.routes'
import sessionRouter from '../routes/session.routes'
import studentsRouter from '../routes/students.routes'

const routes =  Router();

routes.use('/user', usersRouter)
routes.use('/session', sessionRouter)
routes.use('/students', studentsRouter)

/*
routes.get('/pong', ensureAuth,(req, res) => {
    console.log(req.user)
    return res.json({ pong: "ping" });
});*/

export default routes;

