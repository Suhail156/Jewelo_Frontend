import { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
} from '@mui/material';
import { updateProduct } from '../Services/Product';

const EditProducts = ({ product, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setPrice(product.price || '');
      setDescription(product.description || '');
    }
  }, [product]);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!product || !product._id) {
    console.error('Product data is missing or invalid');
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('description', description);
  if (image) formData.append('image', image);

  try {
    const res = await updateProduct(product._id, formData);
    onSave(res.product);
  } catch (err) {
    console.error('Failed to update product:', err);
  }
};

console.log('Product Image:', product.image);

  return (
    <Container maxWidth="sm" className="bg-white p-6 rounded shadow-md">
      <Typography variant="h4" gutterBottom>Edit Product</Typography>
   <img
  src={`http://localhost:3562/uploads/${product.image}`}
  alt={product.name}
  className="w-full h-48 object-cover"
/>


      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          type="number"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={3}
          margin="normal"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ marginTop: '16px', marginBottom: '16px' }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditProducts;
