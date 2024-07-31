import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || '185.102.215.162',
  user: process.env.DB_USER || 'goliath',
  password: process.env.DB_PASSWORD || 'SLktgnekk34982jnkjwdkkvneie9',
  database: process.env.DB_NAME || 'goliath',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
