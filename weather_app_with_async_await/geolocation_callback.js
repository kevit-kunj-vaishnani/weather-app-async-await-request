const axios = require('axios');

async function geolocation(address) {
    try {
        const locationUrl = 'https://geocode.maps.co/search?q='+address;
        const response = await axios.get(locationUrl);

        if (response.data.length === 0) {
            return { error: 'Location not found', response: undefined };
        } 
        
        else {
            const locationInfo = `${response.data[0].display_name} has latitude = ${response.data[0].lat} and longitude ${response.data[0].lon}`;
            return { error: undefined, response: locationInfo };
        }
    } catch (error) {
        return { error: 'Network not connected', response: undefined };
    }
}

geolocation('rajkot')
    .then(({ error, response }) => {
        console.log('response:', response);
        console.log('error:', error);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
