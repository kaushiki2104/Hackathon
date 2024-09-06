// src/pages/LandingPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#0a3d62', // Navy Blue
        padding: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left side (Can be left empty or add some image or logo if needed) */}
      <Box sx={{ flex: 1 }} />

      {/* Right side content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flex: 2,
          color: '#fff',
          paddingRight: '50px',
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome to the Hackathon Dashboard
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Manage and create exciting hackathon challenges with ease. Let's get started and bring your ideas to life!
        </Typography>

        {/* Create a Challenge Button */}
        <Box sx={{ mt: 'auto', alignSelf: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#f39c12', // Orange Color
              fontSize: '16px',
              padding: '10px 20px',
            }}
          >
            Create a Challenge
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
