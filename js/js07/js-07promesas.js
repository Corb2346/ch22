console.log("JS07 Promesas");

//promesas 

const myPromise = new Promise((resolve, reject) => {
    const isOnline = true;

    if (isOnline)
        resolve(("Promesa Resuleta, está en línea"));
    else
        reject(("Promesa Rechazada, está fuera de línea"));//puede regresarse cualquier coasa

});

console.log("Antes de la promesa");
//console.log( myPromise()); las promesas no se consumen de esta manera

//Consumiendo la promesa con .then y .catch
//myPromise.then( ( response ) => {} ).catch( (error) => {} ); //así se consume la promesa
//el primer parámetro then lo trae del resolve. 
//El error lo obtiene si se ejecuta el reject

myPromise //esto va a aparecer cuando se resuelva 
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    }); //así se consume la promesa

console.log("Después de la promesa");

// Promesa de enviar un arreglo y multiplicar por 2; 
// [ 2, 5, 7] => [4, 10, 14] = [10,14]
//Devolver solo los números que sean mayor a 5 xO

const datos = [2, 5, 7];
const datosDuplicados = datos.map((element, index, array) => element * 2);
console.log(datosDuplicados);
const datosFiltrados = datosDuplicados.filter(number => number > 5) //filter se utiliza para regresar el valor que cumpla
console.log(datosFiltrados);

const procesoReducido = datos
    .map(element => element * 2)
    .filter(number => number > 5);
console.log(procesoReducido);
//crea un arreglo nuevo con las condiciones nuevas

const filtrarArreglo = (datos) => {
    const solucion = new Promise((resolve, reject) => {
        const procesoReducido = datos
            .map(element => element * 2)
            .filter(number => number > 5);
        if (procesoReducido.length)
            resolve(procesoReducido);
        else
            reject("Tu arreglo no contiene números mayores a 5")
    });
    return solucion;
}

function filtrarConPromesa() {
    console.log("Función con Then y Catch");
    filtrarArreglo([2, 4, 7])
        .then(response => console.log(response))
        .catch(error => console.warn(error));

    filtrarArreglo([2, 1, 0])
        .then(response => console.log(response))
        .catch(error => console.warn(error));
    console.log("Termina Función con then y catch");
}

//filtrarConPromesa();

//Consumiendo las promesas con Async y Await

//enves de retornar la const solucion de la funcion promise, se devuleve la promesa

//return new Promise
/* 

const filtrarArreglo = (datos) => {
   return new Promise((resolve, reject) => { <---------- esta linea se retorna 
    enves de crear otra variable
        const procesoReducido = datos
            .map(element => element * 2)
            .filter(number => number > 5);
        if (procesoReducido.length)
            resolve(procesoReducido);
        else
            reject("Tu arreglo no contiene números mayores a 5")
    });

} */

async function filtrarPromesaConAwaitTryCatch() { //anteponiendo async permite usar await
    const refBtnAsyncAwait = document.querySelector("#buttonAwait");
    refBtnAsyncAwait.disabled=true;
    try {
        //En este bloque se tratará de resolver la promesa
        console.log("Función con Async y Await");
        //console.log((await filtrarArreglo([2, 4, 7, 10])).length); //antes de lal func asinc poner AWAIT
        console.log((await filtrarArreglo([1, 2, 1,]))); //antes de lal func asinc poner AWAIT
        console.log("Termina la funcion Async y Await");
        
    }
    catch (error) {
        //En este bloque se tratará el reject que genera la promesa
        console.log("Nooooo, se mató X(");
        console.warn(error)
        //envés de un consoleLog se muestra algo en pantalla que avise
    }
    finally{
        refBtnAsyncAwait.disabled = false;
        console.log("Termina La función con async y await");
    }


    //await se detiene y hasta que termina la funcion avanza
} //hasta que no se responda con el then y catch no continua
//filtrarPromesaConAwaitTryCatch();//se convierte la promesa en sync 

//cual usar va a depender de las necesidades

//cuando se genera un reject se debe consumir adecuadamente
//