import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Beer } from "lucide-react";

const BarOrdering = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Beer', price: 5 },
    { id: 2, name: 'Wine', price: 7 },
    { id: 3, name: 'Cocktail', price: 10 },
    { id: 4, name: 'Soft Drink', price: 3 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bar Ordering</h1>
      <div className="mb-6">
        <Input type="text" placeholder="Search drinks..." className="w-full max-w-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Beer className="h-5 w-5" />
                <span>{item.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-4">${item.price.toFixed(2)}</p>
              <Button className="w-full">Add to Order</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BarOrdering;
