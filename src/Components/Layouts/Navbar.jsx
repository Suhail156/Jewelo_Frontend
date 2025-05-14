import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    const name = localStorage.getItem('userName'); 
    console.log(name);
    
    setUserName(name || 'User');
  }
  console.log(token);
}, []);
 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const isLoggedIn = Boolean(localStorage.getItem('token'));

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          Jewellery Store
        </Typography>

        {isLoggedIn ? (
          <Box display="flex" alignItems="center" gap={2}>
            <Typography>
              Hello, <strong>{userName}</strong>
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
