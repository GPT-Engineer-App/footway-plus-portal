import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a brief description of Product 1.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a brief description of Product 2.",
    image: "/images/product2.jpg",
  },
  // Add more products as needed
];

const Index = () => {
  const [comparisonList, setComparisonList] = useState([]);

  const addToComparison = (product) => {
    setComparisonList((prevList) => [...prevList, product]);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Browse Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.image} alt={product.name} className="mb-4" />
              <p>{product.description}</p>
              <div className="mt-4 flex justify-between">
                <Link to={`/product/${product.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Button onClick={() => addToComparison(product)}>
                  Add to Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/comparison">
          <Button variant="primary">Go to Comparison View</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
