import api from './axios';

// Login User
export const loginUser = (credentials) => {
  // return the full Axios promise so toast.promise sees `res` as the Axios Response
  return api.post('/user/login', credentials);
};

// Signup User
export const signupUser = async (data) => {
  try {
    const response = await api.post('/user/signup', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
