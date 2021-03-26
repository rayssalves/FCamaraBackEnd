import { getRepository } from 'typeorm';

import User from '../entity/User';

interface Request {
    name: string;
    email: string;
    pass: string;
}

class CreateUserService{
    public async execute({name, email, pass}: Request): Promise<User>{
        const usersRepository = getRepository(User);
        const checkUserExists = await usersRepository.findOne({
            where: { email }
        });

        if(checkUserExists){
            throw new Error('Email ja foi cadastrado');
        };

        const user = usersRepository.create({
            name,
            email,
            pass
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;