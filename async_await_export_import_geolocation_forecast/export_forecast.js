const axios = require('axios');

async function forecast(latitude, longitude) {
    const url = 'http://api.weatherstack.com/current?access_key=d5a4f924b150a563a85a72818af15062&query=' + latitude + ',' + longitude;

    try
    {
        const response = await axios.get(url);
        if (response.data.error) 
        {
            return console.log('location not exist');
        }

        else
        {
            return `${response.data.location.name} has temperature = ${response.data.current.temperature} celcius`;
        }

        
    } 
    
    catch (error) 
    {
        return console.log('net not connected');
    }
}

module.exports = forecast;
