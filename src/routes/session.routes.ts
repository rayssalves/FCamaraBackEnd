import { Router } from 'express';

import AuthUserService from '../service/AuthUserService'

const sessionRouter = Router();

//rota que loga o usuario
sessionRouter.post('/', async (req, res) => {
    try{ 
        const { email, pass } = req.body;

         //service que contem as regras de negocio
        const authUser = new AuthUserService();

       
        const {user, token} = await authUser.execute({ email, pass })

        //retorna os dados do usuario e a token de login
        return res.json({ user, token });
    }catch(err){
        return res.status(400).json({erro: err.message});
    }
})

export default sessionRouter;