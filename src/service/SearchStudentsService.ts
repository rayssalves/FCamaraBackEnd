import { getRepository, Like } from 'typeorm'

import { SearchStudentsInterface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SearchStudentsService{
    public async execute(searchParameters:SearchStudentsInterface){
        const studentsRepository = getRepository(Students);
    

        const searchResults = await studentsRepository.find({
            where:[
                { address: Like('%'+searchParameters+'%') }, 
                { nome: Like('%'+searchParameters+'%') },
                { material_list: Like('%'+searchParameters+'%') }
                ],
            })
 
            return searchResults
    }
}

export default SearchStudentsService