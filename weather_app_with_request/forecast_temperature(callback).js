const request = require('request')

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

forecast( 37.8267 , -122.4233 , (error,response) => {
    console.log('error : '+error);
    console.log('response : '+response);
})