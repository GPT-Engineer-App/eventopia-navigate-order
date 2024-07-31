// Mock API data
const mockData = {
  events: [
    { id: 1, name: 'Summer Music Festival', date: '2024-07-15', location: 'Central Park' },
    { id: 2, name: 'Tech Conference 2024', date: '2024-09-20', location: 'Convention Center' },
    { id: 3, name: 'Food & Wine Expo', date: '2024-10-05', location: 'City Hall' }
  ],
  menuItems: [
    { id: 1, name: 'Beer', price: 5.00 },
    { id: 2, name: 'Wine', price: 7.50 },
    { id: 3, name: 'Cocktail', price: 9.00 },
    { id: 4, name: 'Soft Drink', price: 3.00 }
  ],
  locations: [
    { id: 1, name: 'Main Stage', description: 'The primary performance area' },
    { id: 2, name: 'Food Court', description: 'Various food vendors and seating' },
    { id: 3, name: 'VIP Lounge', description: 'Exclusive area for VIP ticket holders' }
  ],
  supportTopics: [
    { id: 1, title: 'Ticket Issues', description: 'Problems with purchasing or accessing tickets' },
    { id: 2, title: 'Event Information', description: 'Questions about event schedules or lineups' },
    { id: 3, title: 'Venue Facilities', description: 'Information about amenities and accessibility' }
  ]
};

export async function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.events), 500);
  });
}

export async function fetchMenuItems() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.menuItems), 500);
  });
}

export async function fetchLocations() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.locations), 500);
  });
}

export async function fetchSupportTopics() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.supportTopics), 500);
  });
}
