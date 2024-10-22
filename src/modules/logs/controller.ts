import { Request, Response } from "express"
const getLogs = (req: Request, res: Response) => {

    res.status(200).json({ message: 'Test' })
}


export { getLogs }