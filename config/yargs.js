const opts = {
    base: {
        demand: true,
        alias: 'b' //le da un alias a la base
    },
    limite: {
        alias: 'l',
        default: 10 //pone el límite por defecto
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help() //muestra la ayuda que definí arriba
    .argv;

module.exports = { //Esto es para que lo pueda utilizar en otros archivos
    argv
}