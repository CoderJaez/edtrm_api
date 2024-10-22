import { Request, Response } from "express";
import { signJWT } from "../../utils/jwt.util";
import dotenv from 'dotenv'
dotenv.config()
const { DEFAULT_USERNAME, DEFAULT_PASSWORD } = process.env;

const signIn = (req: Request, res: Response) => {
    const { username, password } = req.body
    if (DEFAULT_PASSWORD === password && DEFAULT_USERNAME === username) {
        const data = {
            username: username
        }
        const access_token = signJWT(data, 'ACCESS_KEY', { expiresIn: '1000m' })
        const refresh_token = signJWT({ ...data }, "REFRESH_KEY", {
            expiresIn: "31d",
        });

        res.status(200).json({
            message: 'Login successful.',
            access_token: access_token,
            refresh_token: refresh_token
        })
    } else {
        res.status(400).json({
            message: "Login failed"
        })
    }



}



export { signIn }