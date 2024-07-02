import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComparisonView = () => {
  const [comparisonList, setComparisonList] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "This is a brief description of Product 1.",
      image: "/images/product1.jpg",
      attributes: {
        price: "$10",
        shop: "Shop A",
      },
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a brief description of Product 2.",
      image: "/images/product2.jpg",
      attributes: {
        price: "$20",
        shop: "Shop B",
      },
    },
    // Add more products as needed
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Comparison View</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisonList.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.image} alt={product.name} className="mb-4" />
              <p>{product.description}</p>
              <div className="mt-4">
                <h2 className="text-xl font-bold">Attributes:</h2>
                <ul className="list-disc list-inside">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;