const request = require("request");

let geoCodeAddress = (address, callback) => {
    let addressValue = encodeURIComponent(address)

    //let key = "OngrzTibscmC6DspcAPQHyO2FjAMuOcy";
    //http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`
    let data = request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressValue}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback("Unable to connect to the google server");
            //return error
            // console.log("Unable to connect to the google server");

        }
        else if (body.status === "ZERO_RESULTS") {
            callback("Invalid addresss");
        }
        else if (body.status === "OK") {

            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lng
            })

            // console.log(`Address of place is ${body.results[0].formatted_address}`);

            // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);

            // console.log(`Longitude :${body.results[0].geometry.location.lng}`)

            // onsole.log(`Address of place is ${bodyObj.results[0].providedLocation.location}`);

            // console.log(`Latitude : ${bodyObj.results[0].locations[0].latLng.lat}`);

            // console.log(`Longitude :${bodyObj.results[0].locations[0].latLng.lng}`)
            //}
        }
    })


}

module.exports = {
    geoCodeAddress
}