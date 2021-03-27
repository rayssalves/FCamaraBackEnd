import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'

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

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret,{
            subject: user.id,
            expiresIn,
        }); 
        return {
            user,
            token
        }

    }
}

export default AuthUserService