import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'

import User from '../models/User'

interface Request {
    email: string;
    pass: string;
}

class AuthUserService {
    public async execute({ email, pass }: Request): Promise<{user: User}>{
        const usersRepository = getRepository(User);

        const user  = await usersRepository.findOne ({where: { email}});

        if(!user){
            throw new Error('Email ou senha estão incorretos')
        };

        const passwordMatched = await compare(pass, user.pass);

        if(!passwordMatched){
            throw new Error('Email ou senha estão incorretos')
        };

        return {
            user
        }

    }
}

export default AuthUserService