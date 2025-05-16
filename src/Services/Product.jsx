import api from './axios';

// Fetch all products
// export const getAllProducts = async () => {
//   try {
//     const response = await api.get('/product/getproducts');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
//fetch getby id products
export const getProductById = async (id, data) => {
  try {
    const response = await api.get(`/product/products/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllProducts = async ({ search, sort, page }) => {
  const res = await api.get('/product/getproducts', {
    params: {
      search,
      sortBy: sort === 'newest' ? 'createdAt' : sort,
      order: 'desc',
      page,
      limit: 6, 
    },
  });
  return res.data;
};

// Add new product
export const addProduct = async (formData) => {
  try {
    const response = await api.post('/product/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Expecting JSON response from backend
  } catch (error) {
    console.error('Error in addProduct:', error);
    throw error;
  }
};

// Update product

export const updateProduct = async (id, formData) => {
  const response = await api.patch(`/product/products/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data; 
};



// Delete product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/product/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
