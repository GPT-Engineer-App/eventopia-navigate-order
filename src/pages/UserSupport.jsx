import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { fetchSupportTopics } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

const UserSupport = () => {
  const { data: supportTopics, isLoading, error } = useQuery({
    queryKey: ['supportTopics'],
    queryFn: fetchSupportTopics
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Common Support Topics</h2>
          {supportTopics && supportTopics.map((topic) => (
            <Card key={topic.id} className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>{topic.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <Card>
            <CardContent className="pt-6">
              <form>
                <div className="space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input type="text" placeholder="Subject" />
                  <Textarea placeholder="Describe your issue or question" rows={4} />
                  <Button type="submit" className="w-full">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserSupport;
