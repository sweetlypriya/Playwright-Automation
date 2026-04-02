import {Pool} from 'pg'

export const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'Automation_Tables',
    password:'People@123',
    port:5432
})

