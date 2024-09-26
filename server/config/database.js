import pg from 'pg'
import './dotenv.js'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}
// console.log("logging",process.env.DATABASE_URL )
export const pool = new pg.Pool({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:false}})
