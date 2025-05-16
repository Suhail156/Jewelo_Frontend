import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const imageUrl = product.image
  ? `http://localhost:3562/uploads/${product.image}`
  : 'https://via.placeholder.com/150';


  return (
    <Link to={`/product/${product._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
       <img
  src={`http://localhost:3562/uploads/${product.image}`}
  alt={product.name}
  className="w-full h-48 object-cover"
  referrerPolicy="no-referrer"
/>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <p className="text-blue-500 font-bold mt-2">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

