import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComparisonView = () => {
  const [comparisonList, setComparisonList] = useState([
    { id: 1, name: "Product 1", description: "Description for product 1", price: "$10" },
    { id: 2, name: "Product 2", description: "Description for product 2", price: "$20" },
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Comparison View</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisonList.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p className="mt-2">Price: {product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;