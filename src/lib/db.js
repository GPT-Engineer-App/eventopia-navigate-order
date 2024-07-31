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

// SQL statements to create tables
const createTablesSql = `
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS support_topics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT
);
`;

// Function to initialize the database
async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();
    await connection.query(createTablesSql);
    console.log('Database tables created successfully');
    connection.release();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

import insertSampleData from './sampleData';

// Call the function to initialize the database
async function setup() {
  await initializeDatabase();
  await insertSampleData();
}

setup();

export default pool;
