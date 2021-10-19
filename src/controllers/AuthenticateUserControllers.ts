import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserControllers {
    async handle(req: Request, res: Response) {

        const service = new AuthenticateUserService();
        // service.execute('Olá')

    }
}

export { AuthenticateUserControllers }