import { getRepository, Like } from 'typeorm'

import { SearchStudentsInterface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SearchStudentsService{
    public async execute(
        {searchParameters, 
        skipPagination = 0, 
        takeMax= 2,
    }:SearchStudentsInterface)
        {
        const studentsRepository = getRepository(Students);
        
        console.log(searchParameters)
        

        const searchResults = await studentsRepository.find({
            where:[
                { address: Like('%'+searchParameters+'%') }, 
                { nome: Like('%'+searchParameters+'%') },
                { material_list: Like('%'+searchParameters+'%') }
                ],  
            })
            
            const pages = Math.round(searchResults.length/takeMax)
            
            console.log({searchResults, pages})

            return {searchResults, pages}       
    }
}

export default SearchStudentsService