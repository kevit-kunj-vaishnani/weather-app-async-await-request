const axios = require('axios');

async function getWeatherData() {
    const url = 'http://api.weatherstack.com/current?access_key=d5a4f924b150a563a85a72818af15062&query=37.775,-122.418';

    try
    {
        const response = await axios.get(url);
        const data = response.data;

        if (data.success===false) {
            console.error('Error:', data.error);
        } 
        
        else{
            console.log(data.current);
        }
    }
    
    catch (error) 
    {
        console.error('Network Error:', error.message);
    }
}

getWeatherData();


/* when longitude and latitude are correct it will display = 

{
    data: {
        request: {
            type: 'LatLon',
            query: 'Lat 37.83 and Lon -122.42',
            language: 'en',
            unit: 'm'
        },

        location: {
            name: 'San Francisco',
            country: 'United States of America',
            region: 'California',
            lat: '37.775',
            lon: '-122.418',
            timezone_id: 'America/Los_Angeles',
            localtime: '2023-09-05 23:38',
            localtime_epoch: 1693957080,
            utc_offset: '-7.0'
        },

        current: {
            observation_time: '06:38 AM',
            temperature: 15,
            weather_code: 296,
            weather_icons: [Array],
            weather_descriptions: [Array],
            wind_speed: 9,
            wind_degree: 350,
            wind_dir: 'N',
            pressure: 1013,
            precip: 0,
            humidity: 93,
            cloudcover: 25,
            feelslike: 14,
            uv_index: 1,
            visibility: 16,
            is_day: 'no'
        }
    }
}

*/






/* when longitude and latitude are not correct it will display = 

/*

{
    data: {
        success: false,
        error: {
            code: 615,
            type: 'request_failed',
            info: 'Your API request failed. Please try again or contact support.'
        }
    }
}

*/