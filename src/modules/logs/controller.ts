import { Request, Response } from "express"
import { getLogs } from "./logService"


const get = async (req: Request, res: Response) => {
    const { divicode_code, time_inout, employee } = req.query;
    const result = await getLogs(1, 20)
    res.status(200).json({ data: result })
}


export { get }