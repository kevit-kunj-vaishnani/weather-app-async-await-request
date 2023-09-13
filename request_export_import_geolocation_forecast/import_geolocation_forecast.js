
const geolocation = require('./export_geolocation.js')
const forecast = require('./export_forecast.js')



geolocation('AHMEDABAD' , (error,response) => {
    console.log("\n");
    console.log('response :'+response);
    console.log('error :'+error);
})



forecast( 37.8267 , -122.4233 , (error,response) => {
    console.log("\n");
    console.log('response : '+response);
    console.log('error : '+error);
})