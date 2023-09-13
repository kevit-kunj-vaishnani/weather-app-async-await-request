const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d5a4f924b150a563a85a72818af15062&query=37.8267,-122.4233'

request({ url:url , json:true } , (error,res) => {
    console.log(res.body.current);
})


