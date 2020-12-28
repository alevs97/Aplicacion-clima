const axios = require('axios');


const ConsClima = async(direccion) => {

    dirUrl = encodeURIComponent(direccion);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dirUrl}&appid=##Api_Key###=metric`);

    if (resp.data.cod == 404) {
        throw new Error(`Ciudad: ${direccion} no encontrada`);
    } else {
        const clima = resp.data.main.temp;
        return clima;
    }
}

module.exports = {
    ConsClima
}