import { Router } from 'express';
import { getRepository } from 'typeorm'
import Students from '../models/Students'

import StudentsService from '../service/CreateStudentsService'

const studentsRouter = Router();

studentsRouter.get('/', async (req, res) => {
    const studentsRepository = getRepository(Students)

    const AllStudent = await studentsRepository.find()

    return res.json(AllStudent)
})

studentsRouter.delete('/', async (req, res) => {
  
    const studentsRepository = getRepository(Students)

    const { id_student } = req.body

    const student = await studentsRepository.find({ where:{ id: id_student } })
    
    await studentsRepository.remove(student)
    
    return res.send('ok')
})

//rota para cadastrar o student
studentsRouter.post('/', async (req, res) => {
    try{ 
        const { create_user_id,
            nome,
            age,
            address,
            material_list
        } = req.body; 

        //Service com as regras de negocio 
        const studentsService = new StudentsService();

        const student = await studentsService.execute({
            create_user_id,
            nome,
            age,
            address,
            material_list 
        });

        return res.json(student);
    }catch(err){
        return res.status(400).json({erro: err.message});
    }
})

export default studentsRouter;