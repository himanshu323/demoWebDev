const yargs = require("yargs");

const geoCodeAPI = require("./geocode/geocodeAPI");
const weather = require("./weather/weatherAPI");

const argv = yargs.options({
    address: {
        demand: true,
        describe: "Address of location to fetch",
        alias: 'a',
        string: true
    }
}).argv;

geoCodeAPI.geoCodeAddress(argv.address, (error, results) => {

    if (error) {
        console.log(error)
    }
    else {
        console.log("Address is", results.address)


        weather.getWeather(results.lat, results.long, (errorMessage, results) => {

            if (errorMessage) {

            }

            else {
                console.log(`Its currently ${results.temperature} but feels like ${results.apparentTemp} `)
            }
        })

    }
});




