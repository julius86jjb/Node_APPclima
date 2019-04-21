const axios = require('axios');


const getLugarLarLng = async(dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-lat888itude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'X-RapidAPI-Key': 'e6bbd4fd73msh741e909728eb01fp12eae5jsnabbedb109614' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error('Sin resultados para esa direccion')
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLarLng
}