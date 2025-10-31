import { Request, Response } from 'express'

interface AuthenticateParams {
    email: string
    password: string
}

type AuthenticationRequest = Request & {body: AuthenticateParams}

const authenticate = async (req: AuthenticationRequest, res: Response) => {
    if (typeof req.body !== AuthenticateParams) res.status(400).send('Invalid body')

    // DO STUFF
    let stuff

    res.status(200).send(stuff)
}

export default authenticate
