const geolocation = require('./export_geolocation.js');
const forecast = require('./export_forecast.js');

async function main() {
  try 
  {
    const geolocation_response = await geolocation('rajkot');
    const forecast_response = await forecast(geolocation_response.latitude, geolocation_response.longitude);

    console.log(geolocation_response);
    console.log(forecast_response);
  } 
  
  catch (error) 
  {
    console.error(error.message);
  }
}

main();


// output =
//        Rajkot, Rajkot Taluka, Rajkot, Gujarat, 360001, India
//        Rajkot has temperature = 33 celcius
