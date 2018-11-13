const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv;

//let parametro = process.argv;
//let base = parametro[2].split('=')[1];

/* console.log(argv._)
console.log(argv.limite)
console.log(argv.base)
 */

let comando = argv._[0];

let base = argv.base
let limite = argv.limite


switch (comando) {
    case 'listar':
        listarTabla(base, limite).then(resultado => {
            console.log('===================='.green);
            console.log(`tabla ${ base }`.green);
            console.log('===================='.green);
            console.log(resultado);
        }).catch((err) => {
            console.log(err);
        })
        break;
    case 'crear':
        crearArchivo(base, limite).then(archivo => {
            console.log('Archivo' + `${archivo}`.green + ' creado');
        }).catch((err) => {
            console.log(err)
        })
        break;
    default:
        console.log('No existe comando');
}