// geolocation (to get longitude , latitude)


const request = require('request')


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
            callback( undefined ,`${ response.body[0].display_name } has latitude = ${ response.body[0].lat } and longitude ${response.body[0].lon}` )          // response : New York, United States has latitude = 40.7127281 and longitude -74.0060152
        }                                                                                                                                                       // error : undefined
        
    })
}



module.exports = geolocation 