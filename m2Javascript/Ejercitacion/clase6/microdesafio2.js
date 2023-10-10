/*Ejercitación correspondiente a la clase N° 6*/
/*Microdesafío 2*/
const { stringify } = require("querystring");

let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maveriick', 'Elvis', 'Thor: amor y trueno'];

function peliculasMasFamosa(pelicula){
    indice = peliculas.indexOf(pelicula);
    if(indice != -1){
        peliculas.slice(indice, 1);
        peliculas.unshift(pelicula.toUpperCase());
    }else{
        return 'Pelicula mencionada no existe';
    }
    return peliculas;
}
console.log(peliculasMasFamosa('Thor: amor y trueno'));

let peliculasTexto = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
const primeraComaEspacio = peliculasTexto.indexOf(', ');
if (primeraComaEspacio !== -1) {
  peliculasTexto = peliculasTexto.slice(primeraComaEspacio + 2).split(', ');
}

console.log(peliculasTexto);

function union(lista1, lista2){
    if(lista1 != undefined && lista2 != undefined){
        return lista1.concat(lista2);
    }else{
        return 'Alguna o las dos listas mencionadas no existen'
    }
}
console.log(union(peliculas, peliculasTexto));