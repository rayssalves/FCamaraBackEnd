import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '../models/User'

interface Request {
    email: string;
    pass: string;
}

interface Response {
    user:User
    token:string
}

class AuthUserService {
    public async execute({ email, pass }: Request): Promise<Response>{
        const usersRepository = getRepository(User);

        const user  = await usersRepository.findOne ({where: { email}});

        if(!user){
            throw new Error('Email ou senha estão incorretos')
        };

        const passwordMatched = await compare(pass, user.pass);

        if(!passwordMatched){
            throw new Error('Email ou senha estão incorretos')
        };

        const token = sign({}, '7a88f3c5d63cd69e5210f49fd9e0d7f4',{
            subject: user.id,
            expiresIn: '1d',
        }); 
        return {
            user,
            token
        }

    }
}

export default AuthUserService