import { Router } from 'express';

import AuthUserService from '../service/AuthUserService'

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
    try{ 
        const { email, pass } = req.body;

        const authUser = new AuthUserService();

        const {user} = await authUser.execute({ email, pass })

        return res.json({ user });
    }catch(err){
        return res.status(400).json({erro: err.message});
    }
})

export default sessionRouter;