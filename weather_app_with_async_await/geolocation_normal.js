const axios = require('axios');

async function geolocation(address) {
  try {
        const geocoding = `https://geocode.maps.co/search?q=${address}`;
        const response = await axios.get(geocoding);

        if (!response.data || response.data.length === 0) {
        console.log('Location not found');
        return;
        }

        const latitude = response.data[0].lat;
        const longitude = response.data[0].lon;

        
        console.log(address+" has "+'\n');
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
  } 
  
  catch(error) {
        console.error('Error:', error.message);
  }
}

geolocation('Los Angeles');
