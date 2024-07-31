import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Beer, MessageCircle } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('events');

  const features = [
    { id: 'events', title: 'Event Management', icon: <Calendar className="h-6 w-6" />, description: 'Discover and manage events' },
    { id: 'bar', title: 'Bar Ordering', icon: <Beer className="h-6 w-6" />, description: 'Order drinks with ease' },
    { id: 'navigation', title: 'Venue Navigation', icon: <MapPin className="h-6 w-6" />, description: 'Find your way around' },
    { id: 'support', title: 'User Support', icon: <MessageCircle className="h-6 w-6" />, description: 'Get help when you need it' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="py-6 px-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">EventXperience</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to EventXperience</h2>
          <p className="text-xl text-gray-600">Your all-in-one platform for seamless event experiences</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
                <Button 
                  className="mt-4 w-full" 
                  onClick={() => setActiveTab(feature.id)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Featured Content</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {activeTab === 'events' && <p>Upcoming events and ticket information will be displayed here.</p>}
            {activeTab === 'bar' && <p>Bar menu and ordering interface will be available here.</p>}
            {activeTab === 'navigation' && <p>Interactive venue maps and navigation tools will be shown here.</p>}
            {activeTab === 'support' && <p>User support options and contact information will be provided here.</p>}
            {!activeTab && <p>Loading featured content...</p>}
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-4 mt-12">
        <p className="text-center text-gray-600">© 2024 EventXperience. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
