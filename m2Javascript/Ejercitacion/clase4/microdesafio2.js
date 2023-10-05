/*Ejercitación correspondiente a la clase N° 3*/
/*Microdesafío 2*/
let pagoMes = 3500;
let consumoKWH = 400;
let mensaje = pagoMes > 300 ? console.log('Debido a que su hogar tuvo un consumo de ' + consumoKWH + 'KWH, en base al ajuste tarifario (hogares con consumo mayor a 300KWH por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $' + (pagoMes + ((pagoMes * 20) / 100))) : 'Debido a que su hogar tuvo un consumo menor a 300KWH no se aplicará ningún tipo de aumento';