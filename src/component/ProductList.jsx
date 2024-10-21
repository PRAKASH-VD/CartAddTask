import React, { useState, useEffect } from 'react';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
