import { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../Services/Product';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { TextField, Select, MenuItem, Pagination, Button } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts({ search, sort, page });
      setProducts(res.products);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, sort, page]);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this product?')) return;

//     try {
//       await deleteProduct(id);
//       toast.success('Product deleted successfully');
//       fetchProducts();
//     } catch (err) {
//       toast.error('Failed to delete product');
//     }
//   };
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <TextField
            label="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            className="max-w-3/2"
          />
        </div>
        <Link to="/add-product">
          <Button variant="contained" color="primary">Add Product</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            <img
              src={`https://jewelo-backend.onrender.com/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-56 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-semibold">${product.price}</p>
            <p className="text-sm text-gray-400">Stock: {product.stock}</p>

            <div className="flex gap-2 mt-4">
              <Link to={`/product/${product._id}`} className="text-blue-600 underline">View</Link>
              <Link to={`/edit-product/${product._id}`} className="text-yellow-600 underline">Edit</Link>
              {/* <button onClick={() => handleDelete(product._id)} className="text-red-600 underline">Delete</button> */}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Home;
