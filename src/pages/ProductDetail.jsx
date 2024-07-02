import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productDetails = {
  1: {
    id: 1,
    name: "Product 1",
    description: "This is a detailed description of Product 1.",
    image: "/images/product1.jpg",
    prices: [
      { shop: "Shop A", price: "$10" },
      { shop: "Shop B", price: "$12" },
    ],
  },
  2: {
    id: 2,
    name: "Product 2",
    description: "This is a detailed description of Product 2.",
    image: "/images/product2.jpg",
    prices: [
      { shop: "Shop A", price: "$20" },
      { shop: "Shop B", price: "$22" },
    ],
  },
  // Add more product details as needed
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="mb-4" />
        <p>{product.description}</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Prices from different shops:</h2>
          <ul className="list-disc list-inside">
            {product.prices.map((price, index) => (
              <li key={index}>
                {price.shop}: {price.price}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Button variant="primary">Add to Compare</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;