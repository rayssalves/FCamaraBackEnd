import { Router } from 'express';

import ensureAuth from '../middlewares/ensureAuth'


import usersRouter from '../routes/user.routes'
import sessionRouter from '../routes/session.routes'
import studentsRouter from '../routes/students.routes'
import getStudentsSpecific from '../routes/getStudentsSpecific.routes'



const routes =  Router();

routes.use('/user', usersRouter)
routes.use('/session', sessionRouter)
routes.use('/students', ensureAuth, studentsRouter)
routes.use('/students/specific', getStudentsSpecific)

routes.get('/pong', ensureAuth,(req, res) => {
    console.log(req.user)
    return res.json({ pong: "ping" });
});

export default routes;

