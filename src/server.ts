import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
dotenv.config();

const { API_URL } = process.env


import authMiddleware from './middlewares/authMiddleware';

//routers
import authRouter from './modules/auth/route'
import logRouter from './modules/logs/route'
const bootstrap = () => {
    const app = express();


    app.use(cors({
        origin: "*",
        allowedHeaders: [
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Header",
            "Access-Control-Expose-Headers",
            "Content-Range",
            "Content-Length",
            "Connection",
            "Content-Type",
            "X-Content-Type-Options",
            "Set-Cookies",
            "*",
        ],
        exposedHeaders: ["x-access-token", "x-refresh-token"],
    }))
        .use(express.json())
        .use("/public/uploads", express.static(__dirname + "/public/uploads"))
        .use(`${API_URL}auth`, authRouter)
        .use(`${API_URL}logs`, authMiddleware as any, logRouter)
        .use("*", (res: Response) => {
            res.status(404).json({ message: "URL not found." })
        })



    return app;
}


export default bootstrap