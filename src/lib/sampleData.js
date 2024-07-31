import pool from './db';

const sampleData = {
  events: [
    { name: 'Summer Music Festival', date: '2024-07-15', location: 'Central Park' },
    { name: 'Tech Conference 2024', date: '2024-09-20', location: 'Convention Center' },
    { name: 'Food & Wine Expo', date: '2024-10-05', location: 'City Hall' }
  ],
  menuItems: [
    { name: 'Beer', price: 5.00 },
    { name: 'Wine', price: 7.50 },
    { name: 'Cocktail', price: 9.00 },
    { name: 'Soft Drink', price: 3.00 }
  ],
  locations: [
    { name: 'Main Stage', description: 'The primary performance area' },
    { name: 'Food Court', description: 'Various food vendors and seating' },
    { name: 'VIP Lounge', description: 'Exclusive area for VIP ticket holders' }
  ],
  supportTopics: [
    { title: 'Ticket Issues', description: 'Problems with purchasing or accessing tickets' },
    { title: 'Event Information', description: 'Questions about event schedules or lineups' },
    { title: 'Venue Facilities', description: 'Information about amenities and accessibility' }
  ]
};

async function insertSampleData() {
  try {
    const connection = await pool.getConnection();

    for (const [table, data] of Object.entries(sampleData)) {
      const placeholders = data[0] ? Object.keys(data[0]).map(() => '?').join(', ') : '';
      const sql = `INSERT INTO ${table} (${Object.keys(data[0]).join(', ')}) VALUES (${placeholders})`;
      
      for (const item of data) {
        await connection.query(sql, Object.values(item));
      }
      
      console.log(`Sample data inserted into ${table} table`);
    }

    connection.release();
    console.log('All sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
}

export default insertSampleData;
