import User from '../../database/models/User'

export interface UserAuth {
    email: string;
    pass: string;
}

export interface ResponseUserAuth {
    user:User
    token:string
}

export interface CreateUserInterface {
    name: string;
    email: string;
    pass: string;
}


