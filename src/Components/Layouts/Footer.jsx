// src/Components/Layout/Footer.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon  from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="background.paper" py={6}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Jewellery Store is your one-stop shop for handcrafted, ethically sourced fine jewelry. We believe in quality that lasts a lifetime.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/shop"    variant="body2" display="block" gutterBottom>Shop</Link>
            <Link href="/about"   variant="body2" display="block" gutterBottom>About</Link>
            <Link href="/contact" variant="body2" display="block" gutterBottom>Contact</Link>
            <Link href="/faq"     variant="body2" display="block">FAQ</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">1234 Gemstone Lane</Typography>
            <Typography variant="body2">Cityville, ST 12345</Typography>
            <Typography variant="body2">Email: support@jewelrystore.com</Typography>
            <Typography variant="body2">Phone: (555) 123-4567</Typography>
          </Grid>

    
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com"   aria-label="Facebook"><FacebookIcon /></IconButton>
              <IconButton href="https://twitter.com"    aria-label="Twitter"><TwitterIcon /></IconButton>
              <IconButton href="https://instagram.com"  aria-label="Instagram"><InstagramIcon /></IconButton>
              <IconButton href="https://linkedin.com"   aria-label="LinkedIn"><LinkedInIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>


        <Box my={4} borderTop={1} borderColor="grey.300"/>

        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Jewellery Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
