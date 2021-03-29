import { getRepository } from 'typeorm'

import Students from '../models/Students';


interface Request {
    create_user_id: string;
    nome: string;
    age: number;
    address: string;
    material_list: string;
}

class StudentsService{
    public async execute({create_user_id, nome, age, address, material_list }: Request): Promise<Students>{
        const studentsRepository = getRepository(Students);

        //vendo se o estudante ja existe
        const checkStudentsExist = await studentsRepository.findOne({ 
            where: { create_user_id, nome, age, address }
        })
        if (checkStudentsExist){
            throw new Error('O estudante já existe.');
        }

        //Salvando ususario no banco
        const student = await studentsRepository.create({
            create_user_id,
            nome,
            age,
            address,
            material_list,
            
        });

        await studentsRepository.save(student);
        return student;
    }
}

export default StudentsService