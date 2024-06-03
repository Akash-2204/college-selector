import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

const CollegeDashboard = ({ college }) => {
  const [logoUrl, setLogoUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://logo.clearbit.com/${college.domains[0]}`);
        setLogoUrl(`https://logo.clearbit.com/${college.domains[0]}`);
        setLoading(false);
      } catch {
        setError('Logo not available');
        setLoading(false);
      }
    };
    fetchLogo();
  }, [college]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5">{college.name}</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {logoUrl ? <img src={logoUrl} alt={`${college.name} logo`} /> : <Typography>{error}</Typography>}
        </>
      )}
    </Box>
  );
};

export default CollegeDashboard;
