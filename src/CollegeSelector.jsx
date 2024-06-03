import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';

const CollegeSelector = ({ setSelectedCollege }) => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
        setColleges(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setLoading(false);
      }
    };
    fetchColleges();
  }, []);

  return (
    <Autocomplete
      options={colleges}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select College"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onChange={(event, newValue) => setSelectedCollege(newValue)}
    />
  );
};

export default CollegeSelector;
