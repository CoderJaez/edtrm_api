import { Request, Response } from "express"
import { getLogs } from "./logService"
const get = async (req: Request, res: Response) => {
    const result = await getLogs(1, 20)
    res.status(200).json({ data: result })
}


export { get }