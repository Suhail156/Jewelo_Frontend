import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, deleteProduct } from '../Services/Product';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Redirect if no token
  useEffect(() => {
    const token = localStorage.getItem('token'); // Adjust if you use a different place to store token
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;

    try {
      await deleteProduct(id);
      toast.success('Product deleted successfully');
      navigate('/');
    } catch (err) {
      toast.error('Failed to delete product');
      console.error('Delete error:', err);
    }
  };

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          src={`https://jewelo-backend.onrender.com/uploads/${product.image}`}
          alt={product.name}
          className="w-full h-80 object-cover"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-blue-600 text-xl font-semibold">${product.price}</p>
        <div className="mt-6 flex gap-4">
          <Link to={`/edit-product/${product._id}`}>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-300 ease-in-out">
              ✏️ Edit
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-300 ease-in-out"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
