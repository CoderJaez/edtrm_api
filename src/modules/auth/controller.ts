import { Request, Response } from "express";

const signIn = async (req: Request, res: Response) => {
    const data = req.body

    res.status(200).json({ data: data })
}



export { signIn }