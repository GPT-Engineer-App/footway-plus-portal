import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const productDetails = {
  1: { name: "Product 1", description: "Detailed description for product 1", prices: { ShopA: "$10", ShopB: "$12" } },
  2: { name: "Product 2", description: "Detailed description for product 2", prices: { ShopA: "$20", ShopB: "$22" } },
  3: { name: "Product 3", description: "Detailed description for product 3", prices: { ShopA: "$30", ShopB: "$32" } },
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
        <p>{product.description}</p>
        <h2 className="mt-4 text-xl">Prices from different shops:</h2>
        <ul className="list-disc list-inside">
          {Object.entries(product.prices).map(([shop, price]) => (
            <li key={shop}>
              {shop}: {price}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;