import Firebird from "node-firebird";
import dotenv from 'dotenv'
dotenv.config()

const { DB_HOST, DB_NAME, DB_UNAME, DB_PASSWORD, DB_PORT } = process.env

export const options = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_UNAME,
    password: DB_PASSWORD,
}