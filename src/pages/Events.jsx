import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Summer Music Festival', date: '2024-07-15', location: 'Central Park' },
    { id: 2, name: 'Tech Conference 2024', date: '2024-09-20', location: 'Convention Center' },
    { id: 3, name: 'Food & Wine Expo', date: '2024-10-05', location: 'City Hall' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Event Management</h1>
      <div className="mb-6">
        <Input type="text" placeholder="Search events..." className="w-full max-w-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{event.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-sm text-gray-600 mb-4">Location: {event.location}</p>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
