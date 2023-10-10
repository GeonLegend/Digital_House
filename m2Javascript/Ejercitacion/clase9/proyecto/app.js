const { toUSVString } = require('util');
const peliculas = require('./peliculas');
for(let i = 0; i < peliculas.length; i++){
    console.log(peliculas[i]);
}

let fs = require('fs');
let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8');
console.log(mensaje);