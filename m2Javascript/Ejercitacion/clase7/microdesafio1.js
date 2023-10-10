/*Ejercitación correspondiente a la clase N° 7*/
/*Microdesafío 1*/
operacionesRealizadas = [3000, -2000, 600, 4000, -7000];
function operacionesBancarias(operaciones){
    retiros = 0;
    depositos = 0;
    for(let i = 0; i < operaciones.length; i++){
        if(operaciones[i] < 0){
            retiros = retiros + operaciones[i];
        }else if(operaciones[i] > 0){
            depositos = depositos + operaciones[i];
        }
    }
    return [retiros, depositos, (retiros + depositos)];
};
function mensajeOperadora(nombre, apellido, operaciones){
    return 'Estimad@ ' + nombre + ' ' + apellido + '. El monto total de los depósitos es de: $' + operacionesBancarias(operaciones)[1] + '. El monto total de los retiros es de: ' + operacionesBancarias(operaciones)[0] + '. Por lo tanto, su saldo actual en la cuenta es de $' + operacionesBancarias(operaciones)[2] + '.'
};
console.log(mensajeOperadora('Julian', 'Diaz Quispia', operacionesRealizadas));