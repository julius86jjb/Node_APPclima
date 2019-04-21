const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion',
        demand: true

    }
}).argv


const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLarLng(direccion)
        const temperatura = await clima.getClima(coords.lat, coords.lng)
        return `El clima de ${coords.direccion} es de ${temperatura}`
    } catch (error) {
        return `No se puede determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)