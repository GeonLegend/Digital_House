/*Ejercitación correspondiente a la clase N° 7*/
/*Microdesafío 2*/
function tablaDeMultiplicar(){
    console.log('TABLA DE MULTIPLICAR (1 - 10)')
    for(let i = 1; i <= 10; i++){
        let multiplicador = i;
        console.log(multiplicador + '----------------')
        for(let i = 1; i <= 10; i++){
            console.log(multiplicador + ' * ' + i + ' = ' + (multiplicador * i));
        }
    }
}
tablaDeMultiplicar();