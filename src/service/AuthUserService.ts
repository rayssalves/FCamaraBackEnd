import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
//variaveis de configuração
import authConfig from '../config/auth'

import User from '../database/models/User'

import {UserAuth, ResponseUserAuth} from './interfaces/UserServiceInterfaces'


class AuthUserService {
    public async execute({ email, pass }: UserAuth): Promise<ResponseUserAuth>{
        const usersRepository = getRepository(User);

        const user  = await usersRepository.findOne ({where: { email}});

        //verificando se o usuario esta devidamente cadastrado
        if(!user){
            throw new Error('Email ou senha estão incorretos')
        };

        const passwordMatched = await compare(pass, user.pass);

        if(!passwordMatched){
            throw new Error('Email ou senha estão incorretos')
        };

        //Fazendo a autenticação do usuario 
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