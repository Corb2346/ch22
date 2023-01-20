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


const refStartInterval = document.getElementById("start-interval");
const refStopInterval = document.getElementById("stop-interval");


let idCounter;
refStartInterval.addEventListener( 'click', (event) => {
    let counter = 0;
    console.log(event);
    refStartInterval.disabled = true;
    refStopInterval.disabled = false;
    idCounter = setInterval( () => console.log(`Contador ${++counter}`),1000);

})

function stopCounter(event){//recibe el evento del boton
    console.log(event);//se ven las propiedades del evento como clic, mouse touche etc
    console.log("Se detiene el contador");
    clearInterval(idCounter)//se pasa el id del contador para que se detenga
    refStartInterval.disabled = false;
    refStopInterval.disabled = true
}

//setTimeOut detiene al llegar a un valor
// clearinterval detiene cuando el usuario quiere