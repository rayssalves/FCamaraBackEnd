import { getRepository, Like } from 'typeorm'

import { SearchStudentsInterface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SearchStudentsService{
    public async execute(
        {searchParameters, 
        skipPagination = 0, 
        takeMax = 10,
    }:SearchStudentsInterface)
        {
        const studentsRepository = getRepository(Students);
        
        // const getAllResults = await studentsRepository.find({
        //     where:[
        //         { address: Like('%'+searchParameters+'%') }, 
        //         { nome: Like('%'+searchParameters+'%') },
        //         { material_list: Like('%'+searchParameters+'%') }
        //         ]
        // })

        const searchResults = await studentsRepository.createQueryBuilder("students")
            .where("students.address = :address", { address: `%${searchParameters}%` })
            .andWhere("students.nome = :nome", { nome: `%${searchParameters}%` })
            .andWhere("students.material_list = :material_list", { material_list: `%${searchParameters}%` })
            .skip(skipPagination)
            .take(takeMax)
            .getMany();

        return searchResults;

        // const searchResults = await studentsRepository.find({
        //     where:[
        //         { address: Like('%'+searchParameters+'%') }, 
        //         { nome: Like('%'+searchParameters+'%') },
        //         { material_list: Like('%'+searchParameters+'%') }
        //         ],  
        //     skip:skipPagination,
        //     take: takeMax
        //     })
            
        //     if(Math.round(getAllResults.length/takeMax) < getAllResults.length/takeMax ){
        //         var pages = Math.round(getAllResults.length/takeMax) + 1
        //     }else{
        //         var pages = Math.round(getAllResults.length/takeMax)
        //     }

        //     return {searchResults, pages}       
    }
}

export default SearchStudentsService