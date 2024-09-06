import React from 'react';
import HackathonCard from './HackathonCard';

const HackathonList = ({ hackathons }) => {
  return (
    <div>
      {hackathons.map((hackathon, index) => (
        <HackathonCard key={index} hackathon={hackathon} />
      ))}
    </div>
  );
};

export default HackathonList;
