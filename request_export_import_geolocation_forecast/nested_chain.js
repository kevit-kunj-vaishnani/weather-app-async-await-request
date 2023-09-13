
const request = require('request')

//----------------------------------------------------------------------------------------------------------
//          forecast

function forecast(latitude, longitude, callback)
{
    const url = 'http://api.weatherstack.com/current?access_key=d5a4f924b150a563a85a72818af15062&query='+latitude+','+longitude

    request({ url:url , json:true } , (error,response) => {


        if (error)                                              //       if this if is executed then
        {                                                       // output =   
            callback('net not connected' , undefined )          //      response : undefined
        }                                                       //      error : net not connected
    

        else if(response.body.error)                            //      if this else if is executed then
        {                                                       // output = 
            callback('location not exist' , undefined )         //      response : undefined                                                          
        }                                                       //      error : location not exist

        
        else if(response)                                                                                                                                       // if this else if is executed then            
        {                                                                                                                                                       // output =
            callback( undefined ,`${ response.body.location.name } has temperature = ${ response.body.current.temperature} celcius` )          // response : New York, United States has latitude = 40.7127281 and longitude -74.0060152
        }       
    })
}


//----------------------------------------------------------------------------------------------------------
//      geolocation

function geolocation(address , callback)
{
    const location_Url = 'https://geocode.maps.co/search?q='+address

    request({ url:location_Url , json :true} , (error,response) => {

        if (error)                                              //       if this if is executed then
        {                                                       // output =   
            callback('net not connected' , undefined )          //      response : undefined
        }                                                       //      error : net not connected
    

        else if(response.body[0].length===0)                    //      if this else if is executed then
        {                                                       // output = 
            callback('location not exist' , undefined )         //      response : undefined                                                          
        }                                                       //      error : location not exist

        
        else if(response)                                                                                                                                       // if this else if is executed then            
        {                                                                                                                                                       // output =
            callback( undefined ,{ location : response.body[0].display_name , latitude : response.body[0].lat  , longitude  : response.body[0].lon } )          // response : New York, United States has latitude = 40.7127281 and longitude -74.0060152
        }                                                                                                                                                       // error : undefined
        
    })
}


//----------------------------------------------------------------------------------------------------------
//          chain

let city_name = process.argv[2]       // taking city name from user (command line argument

geolocation(city_name , (error,geolocation_response) => {
   
    if(error){
        return console.log(error);
    }

    else{
        
        forecast( geolocation_response.latitude , geolocation_response.longitude , (error,forecast_response) => {
            
            if(error){
                return console.log(error);
            }

            else{
                console.log(geolocation_response.location);
                console.log(forecast_response);

            }
            })
    }
})


// in command line argument = mumbai        (node nested_chain.js mumbai)

// output = Mumbai, Mumbai Metropolitan Region, Mumbai Suburban, Maharashtra, India
//          Bombay has temperature = 31 celcius








// ----------------------------------------------------------------------------------------------------------------------------------








/*  we can write directly also

let 'nagpur' = process.argv[2] 
   
geolocation(city_name , (error,geolocation_response) => {

    if(error){
        return console.log(error);
    }

    else{
        
        forecast( geolocation_response.latitude , geolocation_response.longitude , (error,forecast_response) => {
            
            if(error){
                return console.log(error);
            }

            else{
                console.log(geolocation_response.location);
                console.log(forecast_response);

            }
            })
    }
})

*/