/*Ejercitación correspondiente a la clase N° 5*/
/*Microdesafío 2*/
function totalAPagar(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    totalHamburguesa = 0;
    if(tipoDeHamburguesa === 'Carne a la Parrilla'){
        totalHamburguesa += 1800;
    }else if(tipoDeHamburguesa === 'Pollo'){
        totalHamburguesa += 1500;
    }else if(tipoDeHamburguesa){
        totalHamburguesa += 1200;
    }else{
        return 'Ingrese una hamburguesa válida'
    }
    if(jamon){
        totalHamburguesa += 30;
    }if(queso){
        totalHamburguesa += 25;
    }if(salsaDeTomate){
        totalHamburguesa += 5;
    }if(mayonesa){
        totalHamburguesa += 5;
    }if(mostaza){
        totalHamburguesa += 5;
    }if(tomate){
        totalHamburguesa += 15;
    }if(lechuga){
        totalHamburguesa += 10;
    }if(cebolla){
        totalHamburguesa += 10;
    }
    return totalHamburguesa
};
function pedido(nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    return 'Estimado ' + nombre.trim() + ' ' + apellido.trim() + ', el monto total a pagar es de $' + totalAPagar(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
}
console.log(pedido('Julian', 'Díaz Quispia', 'Pollo', true, true, false, false, true, true, true, false))