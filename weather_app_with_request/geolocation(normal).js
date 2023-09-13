

const request = require('request')

const geocoding = 'https://geocode.maps.co/search?q="los angeles"' // when we specify  los angeles in " " then it will consider los angeles both and not only los. if we specify los angeles without " " then it will consider only los 

request({ url: geocoding  , json :true} , (error,res) => {

    if (error) 
    {
        console.log('net not connected');
    }

    else if(res.body.length===0)
    {
        console.log('location not exist')
    }

    else
    {
        const latitude = res.body[0].lat
        const longitude = res.body[0].lon

        console.log(latitude +'\n'+ longitude);
    }
    
})

/*
api is 1 array of more obj

[           = body
    {
            = body[0]
    }

    {
            = body[1]
    }
]
*/