import { getRepository } from 'typeorm'

import Students from '../database/models/Students';
import { CreateStudentInterface } from './interfaces/StudentsServiceInterfaces'

class StudentsService{
    public async execute({create_user_id, nome, age, address, material_list, contact }: CreateStudentInterface): Promise<Students>{
    
        const studentsRepository = getRepository(Students);

        //Salvando ususario no banco
        const student = await studentsRepository.create({
            create_user_id,
            nome,
            age,
            address,
            material_list,
            contact
        });

        await studentsRepository.save(student);
        return student;
    }
}

export default StudentsService