import pool from './db';

export async function fetchEvents() {
  try {
    const [rows] = await pool.query('SELECT * FROM events');
    return rows;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

export async function fetchMenuItems() {
  try {
    const [rows] = await pool.query('SELECT * FROM menu_items');
    return rows;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
}

export async function fetchLocations() {
  try {
    const [rows] = await pool.query('SELECT * FROM locations');
    return rows;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}

export async function fetchSupportTopics() {
  try {
    const [rows] = await pool.query('SELECT * FROM support_topics');
    return rows;
  } catch (error) {
    console.error('Error fetching support topics:', error);
    throw error;
  }
}
