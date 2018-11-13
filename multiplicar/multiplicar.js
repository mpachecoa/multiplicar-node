const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base ${base} no es numérico`);
            return
        }
        if (!Number(limite)) {
            reject(`El valor limite ${base} no es numérico`);
            return
        }
        let resultado = '';

        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(resultado);
    })
}

let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`El valor ingresado ${base} no es numérico`);
                return
            }
            let resultado = '';

            for (let i = 1; i <= limite; i++) {
                resultado += `${base} * ${i} = ${base*i}\n`;
            }

            let nombreArchivo = `./tablas/tabla_${base}-al-${limite}.txt`;
            fs.writeFile(nombreArchivo, resultado, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(nombreArchivo);
            });
        })
    }
    /*
    crearArchivo(5).then(archivo => {
        console.log(`nombre del archivo ${archivo}`)
    })
    */
module.exports = { crearArchivo, listarTabla };