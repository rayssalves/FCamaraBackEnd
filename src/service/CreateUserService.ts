import { getRepository } from 'typeorm'
import User from '../models/User'

interface Request {
    name: string;
    email: string;
    pass: string;
}

class CreateUserService{
    public async exucute({ name, email, pass }: Request): Promise<User>{
        const usersRepository = getRepository(User);

        const checkUserExist = await usersRepository.findOne({ 
            where: { email }
        })
        if (checkUserExist){
            throw new Error('O email ja esta em uso.');
        }

        const user = await usersRepository.create({
            name,
            email,
            pass
        });

        await usersRepository.save(user);
        return user;
    }
}

export default CreateUserService