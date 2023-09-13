
const request = require('request')

// // example 1
// const geocode  = (addreess , callback) => {

//     setTimeout(()=>{
//         const data =   
//         {
//             latitude:0  ,
//             longitude:0
//         }

//         callback(data)
//     },2000)

// }

// geocode('rajkot' , (i) => console.log(i))

// // after 2 s = { latitude: 0, longitude: 0 }


// // ===============================================&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// // example 2 

// function f1(a,b,callback)
// {
//     setTimeout(()=>{

//         const add = a+b

//         callback(add)

//     },2000)

// }

// f1(1,4,(ans)=>console.log(ans))

// // after 2 s it will print 5



// ===============================================&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

function geolocation(address , callback)
{
    const location_Url = 'https://geocode.maps.co/search?q='+address

    request({ url:location_Url , json :true} , (error,response) => {

        if (error)                                              //       if this if is executed then
        {                                                       // output =   
            callback('net not connected' , undefined )          //      response : undefined
        }                                                       //      error : net not connected
    

        else if(response.body[1].length===0)                    //      if this else if is executed then
        {                                                       // output = 
            callback('location not exist' , undefined )         //      response : undefined                                                          
        }                                                       //      error : location not exist

        
        else if(response)                                                                                                                                       // if this else if is executed then            
        {                                                                                                                                                       // output =
            callback( undefined ,`${ response.body[1].display_name } has latitude = ${ response.body[1].lat } and longitude ${response.body[1].lon}` )          // response : New York, United States has latitude = 40.7127281 and longitude -74.0060152
        }                                                                                                                                                       // error : undefined
        
    })
}

geolocation('Rajkot' , (error,response) => {
    console.log('response :',response);
    console.log('error :',error);
})