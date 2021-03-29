import { Router } from 'express';


import StudentsService from '../service/CreateStudentsService'

const studentsRouter = Router();

studentsRouter.post('/', async (req, res) => {
    try{ 
        const { create_user_id,
            nome,
            age,
            address,
            material_list,
            creator_user_id
        } = req.body; 

        //Service com as regras de negocio 
        const studentsService = new StudentsService();

        const student = await studentsService.execute({
            create_user_id,
            nome,
            age,
            address,
            material_list,
            creator_user_id });

        return res.json(student);
    }catch(err){
        return res.status(400).json({erro: err.message});
    }
})

export default studentsRouter;