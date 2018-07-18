// console.log('Hola Mundo');
// console.log( document.getElementById('square-test') );

// document.getElementById('square-test').setAttribute("class", "red-background");

// document.getElementById('square-test').addEventListener('click', function(){
//     this.setAttribute("class", "red-background2");
// });

// let valor1 = 2;
// let valor2 = 3;
// let sumaValores = valor1 + valor2;

// console.log(sumaValores);

// const username = 'ALTAIRE'
// const hi = `Hola ${username} bienvenido de vuelta`;
// console.log(hi);

// var verdadero = true;
// var falso = false;
// console.log(verdadero, falso);

// let noDefinido;
// let nulo = null;
// console.log(noDefinido, nulo);

// let carro = {
//     color: 'rojo',
//     dobleTraccion: false,
//     puertas: 4
// };
// console.log(carro.color);


// const valor1 = 1;
// const valor2 = 3;
// const valor3 = 2;
// const valor4 = 4;

// console.log(sumaValores(valor1, valor3));
// console.log(sumaValores(valor2, valor4));

// function sumaValores(valor1, valor2){
//     return valor1 + valor2;
// }



// for(let i = 0; i < carros.length; i++){
//     console.log(carros[i]);
// }

const carro0 = {
    color: 'rojo',
    dobleTraccion: false,
    puertas: 4
}

const carro1 = {
    color: 'blanco',
    dobleTraccion: false,
    puertas: 2
}

const carro2 = {
    color: 'azul',
    dobleTraccion: null,
    puertas: 4
}

const carro3 = {
    color: 'amarillo',
    dobleTraccion: true,
    puertas: 5
}

const carro4 = {
    color: 'negro',
    dobleTraccion: false,
    puertas: 2
}

const carro5 = {
    color: 'rojo',
    dobleTraccion: true,
    puertas: 4
}

var carros = [carro0, carro1, carro2, carro3, carro4, carro5];

// carros.forEach(function(item, index, self){
//     console.log(index);
//     console.log(item.color);
// })

carros.forEach(function(carro){
    carro.color = 'rojo';
});

console.log(carros)


// var numeros = [122, 6, 18, 43 ];

// console.log(numeros);

// numeros.forEach(function(item, index){
//     numeros[index] = modificar(item, function(valor){
//         return valor / 2;
//     });
// });

// console.log(numeros);

// function modificar(valor, modificador){
//     return modificador(valor);
// }