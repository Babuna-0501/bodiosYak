import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { ProductCard } from "./ProductCard";

const categoryData = {
  men: {
    title: "Men",
    description: "Explore our stylish collection of men's clothing.",
    products: [
      { title: "Men's Jacket", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", price: 120 },
      { title: "Men's Shirt", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", price: 40 },
      { title: "Men's Shirt", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", price: 40 },
    ],
  },
  women: {
    title: "Women",
    description: "Discover the latest fashion trends for women.",
    products: [
      { title: "Women's Dress", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/dad397fab719d7a9d53aaaab13ec6418c3b0e916fb0edc09f184cdc8ec79c7f7?apiKey=9804d3a088fa478e8672485264720a14&", price: 80 },
      { title: "Women's Shoes", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/dad397fab719d7a9d53aaaab13ec6418c3b0e916fb0edc09f184cdc8ec79c7f7?apiKey=9804d3a088fa478e8672485264720a14&", price: 60 },
      { title: "Women's Shoes", image: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/dad397fab719d7a9d53aaaab13ec6418c3b0e916fb0edc09f184cdc8ec79c7f7?apiKey=9804d3a088fa478e8672485264720a14&", price: 60 },
    ],
  },
  home: {
    title: "Home",
    description: "Furnish your home with quality furniture and decor.",
    products: [
      { title: "Sofa", image: "/images/sofa.jpg", price: 500 },
      { title: "Table", image: "/images/table.jpg", price: 150 },
    ],
  },
  accessories: {
    title: "Accessories",
    description: "Complete your look with stylish accessories.",
    products: [
      { title: "Watch", image: "/images/watch.jpg", price: 150 },
      { title: "Sunglasses", image: "/images/sunglasses.jpg", price: 50 },
    ],
  },
};

export function CollectionPage() {
  const { category } = useParams(); 
  
  const categoryDetails = categoryData[category] || {};
  const { title, description, products } = categoryDetails;

  if (!title) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="flex flex-col text-lg leading-6 text-black pt-[145px] max-md:pt-[100px]">

      {/* Page Title */}
      <div className="self-center text-8xl text-center uppercase max-md:text-4xl">
        {title}
      </div>

      {/* Description Section */}
      <section className="self-center leading-[24px] mt-11 text-center max-md:mt-10 w-[1027px] max-md:w-full max-md:px-4 font-libreFranklin font-light">
        {description}
      </section>
      <div className="flex justify-between w-[250px] gap-4 bg-gray-100 p-4 rounded-lg w-full max-w-[1700px] mx-auto mt-12">
          <div className="flex gap-4">
          <h3 className="font-semibold text-lg mb-4">Filter</h3>
          <div className="mb-4">
            <h4 className="font-medium text-md">Type</h4>
            {/* <ul>
              <li>Shirts</li>
              <li>Pants</li>
              <li>Jackets</li>
            </ul> */}
          </div>
          <div className="mb-4">
            <h4 className="font-medium text-md">Size</h4>
            {/* <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
            </ul> */}
          </div>
          <div className="mb-4">
            <h4 className="font-medium text-md">Color</h4>
            {/* <ul>
              <li>Red</li>
              <li>Blue</li>
              <li>Black</li>
            </ul> */}
          </div>
          </div>
          <div className="text-right mb-4">
            <span className="font-semibold text-lg">{products.length} Products</span>
          </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[26px] px-4 max-w-[1920px] mx-auto">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`}>
          <ProductCard 
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            altText={product.title}
          />
        </Link>

        ))}
      </div>
    </div>
  );
}
