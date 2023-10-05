/*Ejercitación correspondiente a la clase N° 3*/
/*Microdesafío 4*/
let numero1 = 34;
let numero2 = 43;
let operacion = 'sumar';
switch (operacion){
    case (operacion === 'sumar'):
        console.log(numero1 + numero2);
        break;
    case (operacion === 'restar'):
        console.log(numero1 - numero2);
        break;
    case (operacion === 'multiplicar'):
        console.log(numero1 * numero2);
        break;
    case (operacion === 'dividir'):
        console.log(numero1 / numero2);
        break;
    default:
        console.log('Las operaciones aceptadas son: sumar - restar - multiplicar - dividir');    
};