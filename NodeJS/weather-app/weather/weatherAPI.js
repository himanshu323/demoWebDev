const request = require("request");

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6b43b7de65458ab9a114c2f60c770c4f/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode == 200) {


            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }
        else {
            callback("Unable to fetch data")
        }
    })
}

module.exports = {
    getWeather
}