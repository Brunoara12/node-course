const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f99de8116c2909f97f1855450b304524&query=' + lat + ',' + long + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is curently ' + response.body.current.temperature + ' degrees out. It feels like '
            + response.body.current.feelslike)
        }
    })
}

module.exports = forecast