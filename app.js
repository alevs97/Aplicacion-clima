const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

clima.ConsClima(argv.direccion)
    .then(cli => console.log(`El clima de ${argv.direccion} es ${cli}`))
    .catch(err => console.log(`Error al buscar el clima de ${argv.direccion}`));