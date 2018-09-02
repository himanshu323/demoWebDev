const request=require("request");


let getAddress=(address)=>{


    let addressValue = encodeURIComponent(address)

    //let key = "OngrzTibscmC6DspcAPQHyO2FjAMuOcy";
    //http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`
  return new Promise((resolve,reject)=>{

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressValue}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            reject("Unable to connect to the google server");
            //return error
            // console.log("Unable to connect to the google server");

        }
        else if (body.status === "ZERO_RESULTS") {
            reject("Invalid addresss");
        }
        else if (body.status === "OK") {

            resolve( {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lng
            })

        }}

  )
    
})
}

getAddress("110055").then((data)=>{
    console.log(JSON.stringify(data,undefined,4));
})
.catch((error)=>{
    console.log(error);
})