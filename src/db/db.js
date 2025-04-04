import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => { 
    if (err) { 
       return console.error('Error acquiring client', err.stack); 
    } 
    console.log('Connected to PostgreSQL database'); 
    release();
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });

export const query = (text, params) => pool.query(text, params);
export { pool };