import Firebird from "node-firebird";
import dotenv from 'dotenv'
dotenv.config()

const { DB_HOST, DB_NAME, DB_UNAME, DB_PASSWORD, DB_PORT } = process.env

export const options = {
    host: DB_HOST as string,
    port: DB_PORT as any,
    database: DB_NAME as string,
    user: DB_UNAME as string,
    password: DB_PASSWORD as string,
}