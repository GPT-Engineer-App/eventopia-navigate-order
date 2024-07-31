import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { fetchLocations } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

const VenueNavigation = () => {
  const { data: locations, isLoading, error } = useQuery({
    queryKey: ['locations'],
    queryFn: fetchLocations
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Venue Navigation</h1>
      <div className="mb-6">
        <Input type="text" placeholder="Search locations..." className="w-full max-w-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <Card key={location.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{location.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{location.description}</p>
              <Button className="w-full">Get Directions</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VenueNavigation;
