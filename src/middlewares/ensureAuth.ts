import { Request, Response, NextFunction, request} from 'express';
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface TokenPayload {
    iat: number,
    exp: number,
    sub: string
}

export default function ensureAuth(
    req: Request, 
    res: Response, 
    next:NextFunction
    ): void {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new Error("O token JWT esta faltando")
    }   

    const [, token] = authHeader.split(' ');

    try{
        const decoded = verify(token, authConfig.jwt.secret)

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub
        }

        return next();
    }catch{
        throw new Error('O token JWT e invalido')
    }

}