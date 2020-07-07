//requireds 
const fs = require('fs');

//const colors = require('colors');
const colors = require('colors/safe');

const { resolve } = require('path');
const { rejects } = require('assert');

let listarTabla = (base, limite) => {

    console.log('===================='.green);
    console.log(`====tabla del ${ base}====`.green);
    console.log('===================='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base* i} `);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`la base ${base} no es un número. :(`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`./archivos-tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejects(`${err}`.red);
            else
                resolve(`El archivo`.green + ` tabla-${base}.txt `.blue + `ha sido creado correctamente!`.green);
        });

    });
};


module.exports = {
    crearArchivo,
    listarTabla
}