/*Ejercitación correspondiente a la clase N° 3*/
/*Microdesafío 2*/
let nombre = 'Julián Leandro';
let apellido = 'Díaz Quispia';
let sueldoActual = 340000;
let porcentajeAumento = 30;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;
let mensaje = 'Hola, estimad@ ' + nombre + ' ' + apellido + ', en base a su sueldo actual: $' + sueldoActual + ' ha recibido un aumento del ' + porcentajeAumento + '%: $' + calculoAumento + ' y su nuevo sueldo es de $' + nuevoSueldo;
console.log(mensaje);