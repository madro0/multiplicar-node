const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arch => console.log(`Archivo crear: ${arch}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}