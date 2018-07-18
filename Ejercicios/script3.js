const squareEjercicio = document.getElementById('square-test')
const squareEjercicio2 = document.getElementById('square-test')
const squareLog = document.getElementById('squareLog')
const resetbutton = document.getElementById('reset')

console.log(squareEjercicio);

document.getElementById('square-test').setAttribute("class", "red-background");

squareEjercicio.addEventListener('click', function(evento){
    const span = document.createElement('span');
    span.innerText = evento.target.style.backgroundColor;
    console.log(span);
    // this.setAttribute("class", "blue-background");
    // // console.dir(evento.target);
    // if ("blue-background"){
    //     ("red-background")
    // } else {
    //     ("blue-background")
    // }
    if (evento.target.style.backgroundColor === 'turquoise'){
        (evento.target.style.backgroundColor = 'tomato')
    } else {
        (evento.target.style.backgroundColor = 'turquoise')
    }
    squareLog.appendChild(span);
});

resetbutton.addEventListener('click', function(evento){
    squareLog.innerText = null;
    squareEjercicio.style.backgroundColor = 'white';
})
