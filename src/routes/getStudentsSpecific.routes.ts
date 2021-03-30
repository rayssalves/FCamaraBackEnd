import { Router } from 'express';
import { getRepository } from 'typeorm'
import Students from '../models/Students'


const getStudentsSpecific = Router();


getStudentsSpecific.get('/', async (req, res) => {
    const studentsRepository = getRepository(Students)

    const {create_user_id} = req.body
    const SpecificStudents = await studentsRepository.find({where:{create_user_id}})

    return res.json(SpecificStudents)
})

export default getStudentsSpecific;