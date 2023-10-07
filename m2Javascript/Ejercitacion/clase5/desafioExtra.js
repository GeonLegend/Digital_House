/*Ejercitación correspondiente a la clase N° 5*/
/*Desafío Extra*/
let mayusculas = string => string.toUpperCase();
console.log(mayusculas('Hholasddaosdm'));

let tipoDeDato = dato => 'El tipo de dato solicitado es: ' + typeof(dato) + '.';
console.log(tipoDeDato(true));

let edadPerro = edad => 'Su perro tiene aproximadamente ' + (edad * 7) + ' años.'
console.log(edadPerro(7))

let valorTrabajo = (salarioMensual, cantidadTrabajo, cantidadHoras) => {
    return 'Si tu salario mensual es de: $' + salarioMensual + ' y trabajas ' + cantidadTrabajo + ' días del mes, aportando ' + cantidadHoras + ' horas de trabajo por dia, el valor de tu salario por hora es: $' + ((salarioMensual/cantidadTrabajo)/cantidadHoras);
}
console.log(valorTrabajo(450000, 24, 7))