const yargs = require("yargs");
const axios=require("axios")

const geoCodeAPI = require("./geocode/geocodeAPI");
const weather = require("./weather/weatherAPI");

const argv = yargs.options({
    address: {
        demand: false,
        describe: "Address of location to fetch",
        alias: 'a',
        string: true
    }
}).argv;
if(argv.address){
let addressValue = encodeURIComponent(argv.address)
}
else{
    addressValue="110055";
    
}
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressValue}`).then((response)=>{
if(response.data.status==="ZERO_RESULTS"){
    throw new Error("Invalid Address")
}
console.log(response.data.results[0].formatted_address);
let lat=response.data.results[0].geometry.location.lat;
let long=response.data.results[0].geometry.location.lng;
console.log(`https://api.da.net/forecast/6b43b7de65458ab9a114c2f60c770c4f/${lat},${long}`);
return axios.get(`https://api.darksky.net/forecast/6b43b7de65458ab9a114c2f60c770c4f/${lat},${long}`);
}).
then((response)=>{

   let temperature=response.data.currently.temperature;
   let apparentTemp= response.data.currently.apparentTemperature;
console.log(`Its currently ${temperature} but feels like ${apparentTemp} `);
}).
catch((error)=>{
    if(error.code==="ENOTFOUND"){
    console.log("Unable to connect to the Google API server");

    }
    else{
        console.log(error.message);
    }
})






