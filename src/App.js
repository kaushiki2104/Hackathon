import React, { useState } from 'react';
import Header from './components/Header';
import HackathonList from './components/HackathonList';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
  const [hackathons, setHackathons] = useState([
    { name: 'Hackathon 1', description: 'Description for Hackathon 1' },
    { name: 'Hackathon 2', description: 'Description for Hackathon 2' },
    { name: 'Hackathon 3', description: 'Description for Hackathon 3' },
  ]);

  return (
    <div>
      <Dashboard/>
      <Header />
      <div style={{ padding: '20px' }}>
        <HackathonList hackathons={hackathons} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
