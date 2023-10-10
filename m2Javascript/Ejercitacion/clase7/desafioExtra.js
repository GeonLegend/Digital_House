/*Ejercitación correspondiente a la clase N° 7*/
/*Desafío Extra*/
function siguientes(valor){
    for(let i = valor; i <= (valor + 10); i++){
        console.log(i);
    }
}
siguientes(10);

for(let i = 1; i <= 57; i++){
    if((i % 3) == 0){
        console.log(i);
    } 
}

function sumatoria(){
    contador = 0;
    for(let i = 0; i <= 100; i++){
        contador = contador + i;
    }
    return contador
}
console.log(sumatoria());

function mayusculas(texto){
    for(let i = 0; i < texto.length; i++){
        console.log(texto[i].toUpperCase());
    }
}
mayusculas('practicando el uso de los ciclos y bucles');

function valoresPositivosPares(array){
    for(let i = 0; i < array.length; i++){
        if((array[i] % 2) == 0){
            console.log(array[i]);
        }
    }
}
valoresPositivosPares([2, 4, 213234, 23424, 23423, 234234, 23424]);