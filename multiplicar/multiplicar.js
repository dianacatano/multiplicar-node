const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hola mundo'));
        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    let data = '';
    console.log('============='.green);
    console.log(`tabla de ${base}`.green);
    console.log('============='.red);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla
}