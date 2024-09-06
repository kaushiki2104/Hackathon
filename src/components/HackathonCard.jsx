import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const HackathonCard = ({ hackathon }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5">{hackathon.name}</Typography>
        <Typography variant="body2" color="textSecondary">{hackathon.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">View Details</Button>
      </CardActions>
    </Card>
  );
};

export default HackathonCard;
