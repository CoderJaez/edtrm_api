import { Request, Response, NextFunction } from 'express';
import { signJWT, verifyJWT } from '../utils/jwt.util';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers['x-access-token']

        const refreshToken = req.headers['x-refresh-token'] as string

        const { decoded, expired } = verifyJWT(accessToken as string, 'ACCESS_KEY')
        if (expired && !decoded) {
            const decodedRefreshToken = verifyJWT(refreshToken, "REFRESH_KEY");

            if (decodedRefreshToken.expired && !decodedRefreshToken.decoded)
                return res.status(403).json({ message: "Forbidden" });

        }
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Forbidden" });

    }

    next()
}

export default authMiddleware