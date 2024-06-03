import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import CollegeSelector from './CollegeSelector';
import CollegeDashboard from './CollegeDashboard';
import './App.css';

function App() {
  const [selectedCollege, setSelectedCollege] = useState(null);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          College Selector Interface
        </Typography>
        <CollegeSelector setSelectedCollege={setSelectedCollege} />
        {selectedCollege && <CollegeDashboard college={selectedCollege} />}
      </Box>
    </Container>
  );
}

export default App;
