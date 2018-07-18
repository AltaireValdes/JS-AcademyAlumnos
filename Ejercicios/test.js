
//CREACION DE LA PROMESA <3
const promise = new Promise((res, rej)=>{
    setTimeout(()=> res('Acabo Timeout'), 5000);
})
//PROMESA YA CREADA

//CONSUMES LA PROMESA
promise.then((res) => console.log(res));
console.log('hola');