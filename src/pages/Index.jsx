import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  { id: 1, name: "Product 1", description: "Description for product 1" },
  { id: 2, name: "Product 2", description: "Description for product 2" },
  { id: 3, name: "Product 3", description: "Description for product 3" },
];

const Index = () => {
  const [comparisonList, setComparisonList] = useState([]);

  const addToComparison = (product) => {
    setComparisonList((prevList) => [...prevList, product]);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Browse Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <div className="mt-4 space-x-2">
                <Button asChild>
                  <Link to={`/products/${product.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" onClick={() => addToComparison(product)}>
                  Add to Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;