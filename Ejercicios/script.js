'use strict';
(() => {
    const bAppend = appendLI('becados');
    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    
    fetch('alumnos')
    .then ((res) => {
        return res.json();
    })
    .then ((alumnos) =>{
        alumnos.forEach ((alumnos) => console.log(alumnos));
        document.getElementById('becados').innerHTML = '';
        alumnos.forEach (alumno => {           
           if (alumno.promedio >= 80 || (alumno.promedio >=30 && alumno.destacado)) {
            bAppend(alumno.nombre);
           }
        });
        
        document.getElementById('reprobados').innerHTML = '';
        alumnos.forEach (alumno => {
            if (alumno.promedio <= 30){
           rAppend(alumno.nombre);
            }
        });
        
        document.getElementById('asesorias').innerHTML = '';
        alumnos.forEach (alumno => {
            if (alumno.promedio > 30 && alumno.promedio < 80) {
            aAppend(alumno.nombre);
            }
        });
    })

    function imprimirAlumnos(alumnos){
        document.getElementById('becados').innerHTML= '';
        alumnos.forEach(alumno => {
            bAppend(alumno.nombre);
        });
    }

    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }

})();


// fetch('/cars')
//     .then ((res) => {
//         return res.json()
//     })
//     .then ((cars) => {
//         console.log(cars);
//         const carsName = cars.map((car) => {
//             return {
//                 Nombre: car.name,
//                 Precio: car.dollar_value * 18.20,
//             }
//         });
//         console.log(carsName);
//     })