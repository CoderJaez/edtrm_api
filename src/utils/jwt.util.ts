import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const { ACCESS_PUBLIC_KEY, REFRESH_PUBLIC_KEY } = process.env;

const verifyJWT = (token: string, keyName: string) => {
    const key = keyName === 'ACCESS_KEY' ? ACCESS_PUBLIC_KEY : REFRESH_PUBLIC_KEY;

    try {
        const decoded = jwt.verify(token, key as string)

        return {
            valid: true,
            expired: false,
            decoded,
        };

    }
    catch (err: any) {
        console.error(err.message)
        return {
            valid: false,
            expired: true,
            decoded: null
        }
    }

}

const signJWT = (object: any, keyName: string, options: { expiresIn: string }) => {
    const key = keyName === "ACCESS_KEY" ? ACCESS_PUBLIC_KEY : REFRESH_PUBLIC_KEY;
    const token = jwt.sign(object, key as string, options);
    return token;
}


export { signJWT, verifyJWT }