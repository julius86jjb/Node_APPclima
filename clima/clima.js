const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4a891d8d927b8e16bd354493007b9373&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}