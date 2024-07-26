import React, { useState } from 'react';
import { Container, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [results, setResults] = useState({ celsius: '', fahrenheit: '', kelvin: '' });

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const convertTemperature = () => {
    const temp = parseFloat(temperature);
    let celsius, fahrenheit, kelvin;

    switch (unit) {
      case 'Celsius':
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        break;
      case 'Fahrenheit':
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
        break;
      case 'Kelvin':
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
        break;
      default:
        break;
    }

    setResults({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2),
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#c5cae9" }}

    >
    <Box
    height={400}
      width={400}
      display="flex"
    
      alignItems="center"
      gap={4}
      p={2}
      sx={{ backgroundColor: "#121858", border: '2px', borderRadius: '8px' }}
      
    >
    <Container>
      <Typography variant="h4" color="#2196f3" gutterBottom>Temperature Conversion Program</Typography>
      <TextField
            label="Enter Temperature"
            type="number"
            value={temperature}
            onChange={handleTemperatureChange}
            fullWidth
             margin="normal"
            sx={{
              color: 'white',
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
            }}
      />
      <Select
            value={unit}
            onChange={handleUnitChange}
            margin="normal"
            sx={{
              color: 'white',
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              
              
            }}
      >
        <MenuItem value="Celsius">Celsius</MenuItem>
        <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
        <MenuItem value="Kelvin">Kelvin</MenuItem>
      </Select>
      <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={convertTemperature}>
        Convert
      </Button>
      <Typography variant="h6" color="#2196f3" gutterBottom>Converted Temperatures:</Typography>
      <Typography color="white" gutterBottom>Celsius: {results.celsius} °C</Typography>
      <Typography color="white" gutterBottom>Fahrenheit: {results.fahrenheit} °F</Typography>
      <Typography color="white" gutterBottom>Kelvin: {results.kelvin} K</Typography>
        </Container>
        </Box>
      </Box>
  );
};

export default TemperatureConverter;