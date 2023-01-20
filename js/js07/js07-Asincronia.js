console.log("ya sirve");

const introduccion = () => {
    console.log("01-Bienvenidos y bienvenidas a CH22");
}

const desarrolloAsíncrono = (delay) => {
    setTimeout( () => console.log(`Asíncrono - Pásele en ${delay}`)
    ,delay ); // lo va a ejecutar pasado la cantidad de tiempo dado
}

const instrucciones = () => {
    console.log("02-pasale a lo barrido");
}

const despedidad = () => {
    console.log("03-Ay nos vidrios, nos vicenteamos luego");
}

let idSetInterval;
const setIntervalAsincrono = (delay = 2000) => { 
    let contador= 0;
    idSetInterval = setInterval( () => console.log(` RockStar ${++contador}`), delay )
}

const stopIntervalAsincrono = () => {
    setTimeout( () => {
        console.log("Se detiene el intervalo");
        idSetInterval && clearInterval(idSetInterval) // si idSetInterval es falso no hace nada
    } , 10_000)
    
}

//Programación síncrona
introduccion();
instrucciones();
despedidad();

//Programación asincrona

introduccion();
desarrolloAsíncrono(2000); //son segundos
desarrolloAsíncrono(6000); //son segundos
setIntervalAsincrono(2000);//se repite multiples veces cada 2 segundos o 2000 milisegundos 
stopIntervalAsincrono();
despedidad();// esta instruccion no espera a que finalice la funcion asíncrona
