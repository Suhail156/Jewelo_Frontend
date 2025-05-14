// src/Pages/AddProduct.jsx
import { useState,useEffect } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Autocomplete,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { addProduct } from '../Services/Product';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const categoryOptions = [
  { label: 'Necklace', value: 'necklace' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Bracelet', value: 'bracelet' },
  { label: 'Ring', value: 'ring' },
  { label: 'Anklet', value: 'anklet' },
  { label: 'Pendant', value: 'pendant' },
  { label: 'Bangles', value: 'bangles' },
];

export default function AddProduct() {
  const [name, setName]             = useState('');
  const [price, setPrice]           = useState('');
  const [stock, setStock]           = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]     = useState(null);
  const [manufactureDate, setManufactureDate] = useState(dayjs());
  const [image, setImage]           = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error('Please select an image.');
      return;
    }

    const fd = new FormData();
    fd.append('name', name);
    fd.append('price', price);
    fd.append('stock', stock);
    fd.append('description', description);
    fd.append('category', category?.value || '');
    fd.append('manufactureDate', manufactureDate.format('YYYY-MM-DD'));
    fd.append('image', image);

    try {
      await addProduct(fd);
      toast.success('Product created!');
      navigate('/');
    } catch (err) {
      console.error('Add product error:', err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Failed to create product');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <Container maxWidth="sm" className="py-10">
      <Typography variant="h4" gutterBottom>Add Product</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={e=>setName(e.target.value)}
                   fullWidth required margin="normal"/>
        <TextField label="Price" value={price} onChange={e=>setPrice(e.target.value)}
                   type="number" fullWidth required margin="normal"/>
        <TextField label="Stock" value={stock} onChange={e=>setStock(e.target.value)}
                   type="number" fullWidth required margin="normal"/>
        <TextField label="Description" value={description} onChange={e=>setDescription(e.target.value)}
                   fullWidth multiline rows={3} margin="normal"/>
        <Autocomplete
          options={categoryOptions}
          getOptionLabel={o=>o.label}
          value={category}
          onChange={(_,v)=>setCategory(v)}
          renderInput={params => <TextField {...params} label="Category" margin="normal"/>}
        />
        <DatePicker
          label="Manufacture Date"
          value={manufactureDate}
          onChange={d=>setManufactureDate(d)}
          renderInput={params => <TextField {...params} fullWidth margin="normal"/>}
        />
        <input type="file" accept="image/*" required
               onChange={e=>setImage(e.target.files[0])}
               className="my-4"/>
        <Button type="submit" variant="contained" fullWidth>Add Product</Button>
      </form>
    </Container>
  );
}
