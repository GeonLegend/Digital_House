/*Ejercitación correspondiente a la clase N° 6*/
/*Microdesafío 1*/
let electrodomesticos = ['Refrigerador', 'Lavadora', 'Microondas', 'Licuadora', 'Cafetera', 'Aspiradora'];
console.log(electrodomesticos[0])
console.log(electrodomesticos[1])
console.log(electrodomesticos[2])
console.log(electrodomesticos[3])
console.log(electrodomesticos[4])
console.log(electrodomesticos[5])

let primerDato = electrodomesticos.shift();
electrodomesticos.push(primerDato);
console.log(electrodomesticos);

electrodomesticos.push('Tostadora');
electrodomesticos.push('Batidora');
console.log(electrodomesticos);

console.log(electrodomesticos.length);

if(electrodomesticos.indexOf('Plancha') != -1){
    console.log('Producto Encontrado');
}else{
    console.log('El producto buscado no existe');
}

elementosUnificados = electrodomesticos.join(' ');
console.log(elementosUnificados);

console.log(elementosUnificados.length);

reemplazo = elementosUnificados.replace('Licuadora', 'Lavavajillas');
console.log(reemplazo);

nuevoArray = reemplazo.split(' ');
console.log(nuevoArray);