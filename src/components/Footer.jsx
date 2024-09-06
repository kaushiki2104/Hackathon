import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
      <Typography variant="body1">Hackathon Manager © 2024</Typography>
    </Box>
  );
};

export default Footer;
