/*Ejercitación correspondiente a la clase N° 5*/
/*Microdesafío 1*/
const { before } = require("node:test");
const { arrayBuffer } = require("stream/consumers");

/*Microdesafío 1*/
function alquilerDeVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){
        if(tipoDeVehiculo === 'Compacto'){
            precioVehiculo = diasDeAlquiler * 14000;
        }else if(tipoDeVehiculo === 'Mediano'){
            precioVehiculo = diasDeAlquiler * 17000;
        }else if(tipoDeVehiculo === 'Camioneta'){
            precioVehiculo = diasDeAlquiler * 28000;
        }
        else{
            return 'Ingrese un vehiculo valido'
        };
        if(sillaParaBebe){
            mensaje = 'Debido a su solicitud de una silla para bebe, siendo el coste de este de $1200 por dia de alquiler, el valor agregado es de $' + (1200 * diasDeAlquiler) + ', dando un total de $' + (precioVehiculo + (1200 * diasDeAlquiler)) + '. ';
        }else{
            mensaje = '';
        }
    return 'Estimad@ cliente: en base al tipo de vehiculo alquilado: ' + tipoDeVehiculo + ', considerando los ' + diasDeAlquiler + ' días utilizados, el monto total a pagar es de $' + (precioVehiculo + '. ' + mensaje);
};
console.log(alquilerDeVehiculo('Camioneta', 10, true));