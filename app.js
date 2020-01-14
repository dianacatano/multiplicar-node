const argv = require('./config/yargs.js').argv; //Es decir argv.argv 
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; //Con esto ya voy a tener los comandos listar y crear

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)

        .then(archivo => console.log(`Archivo creado: ${archivo.rainbow}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv); //muestra la base