import React from "react";
import { useParams } from "react-router-dom";

const categoryData = {
  men: {
    title: "Men",
    description: "Explore our stylish collection of men's clothing.",
    products: [
      { title: "Men's Jacket", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", price: 120, id: 1, description: "A stylish men's jacket." },
      { title: "Men's Shirt", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", price: 40, id: 2, description: "A comfortable men's shirt." },
      { title: "Men's Shirt", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", price: 40, id: 3, description: "A stylish men's shirt." },
    ],
  },
  // Add other categories as needed...
};

export function ProductDetailPage() {
  const { productId } = useParams();
  
  // Make sure productId is valid
  if (!productId) {
    return <p>Product not found</p>;
  }

  // Find the product by productId from all categories
  const product = Object.values(categoryData)
    .flatMap(category => category.products)
    .find(p => p.id === parseInt(productId));  // Ensure you are matching the productId as a number
  
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col items-center pt-12 px-4">
      {/* Product Title */}
      <h1 className="text-4xl font-semibold">{product.title}</h1>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="mt-4 max-w-lg h-auto"
      />

      {/* Product Description */}
      <p className="mt-6 text-lg text-center">{product.description}</p>

      {/* Product Price */}
      <p className="mt-4 text-xl font-semibold">${product.price}</p>
    </div>
  );
}
