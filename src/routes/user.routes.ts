import { Router } from 'express';


import CreateUserService from '../service/CreateUserService'

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try{ 
        const { name, email, pass} = await req.body; 

        //Service com as regras de negocio 
        const createUser = new CreateUserService();

        const user = await createUser.execute({ name, email, pass });

        return res.json(user);
    }catch(err){
        return res.status(400).json({erro: err.message});
    }
})

export default usersRouter;