import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditProducts from './EditProducts';
import { getProductById } from '../Services/Product';

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                setError('Failed to load product. Please try again.');
            }
        };

        fetchProduct();
    }, [id]);
     useEffect(() => {
    const token = localStorage.getItem('token'); // adjust if you use a different token storage
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

    const handleSave = () => {
        navigate(`/product/${id}`);
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {product ? (
                <EditProducts product={product} onSave={handleSave} />
            ) : (
                <div>Loading product...</div>
            )}
        </div>
    );
};

export default EditProductPage;
