console.log("Sesión js04");
//nombre de variables se usan en plural 
//al ser varios datos
const nombresCh22 = ["Brayan","Serch","Melani"];
const nombresCh14 = new Array("Abue","Cori","Maga","Sebas")
//último índice es la longitud del array -1
//cantidad de elementos es la longitud del array
console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
//Esta linea va a generar un array de 24 elementos
const promedioEdadesCh14 = new Array(24);
console.log(promedioEdadesCh14);
//conocer la longitu de un arreglo 
console.log(`Número de elementos ${promedioEdadesCh22.length}`);
console.log(`Número de elementos ${promedioEdadesCh14.length}`);

//Se recomienda declarar los arrays(objetos) con const 
//para prevenir que se cambie el tipo de dato

const armasCh22 = ["manoplas","picahielo"];
//si se declara let y se asigna armasCh22 = "otro",
//se sobre escribe la informacion

console.log("Lista de armas: " + armasCh22);

//Leer un elemento del Arreglo

console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene un ${armasCh22[0]}`);

// cambiar dato de un arreglo 

console.log(`Jorge tiene un ${armasCh22[0] ="filero"}`);

console.log(armasCh22);

//objetos son datos mutables, inmutables los datos priminitvos

let nombreClica = "Los wichales";

console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

nombreClica[0] = "T";//No cambia por que un String es un dato 
//primitivo inmutable
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
// esto es una reasignación
nombreClica = "The Wichales";

//Agregar un nuevo dato al arreglo, Al final.

//armasCh22 = ["manoplas","picahielo","machete"];//no se puede reasignar 
//al ser constante marca error por que se reasigna el tipo de dato

armasCh22[2] = "machete" //añade un nuevo espacio por que no existe índice 2
console.log("Acualizacion Armas: "+ armasCh22);

armasCh22[armasCh22.length] = "macana";
armasCh22.push("cadena");
console.log(armasCh22); 
//Agregar elementos al inicio 
armasCh22.unshift("navaja","bate");//se pueden agregar mas de 1 elemento
console.log("Actualizacion de armas: "+armasCh22);

//Ciclo for

/* Sintáxis

    for(instrucción Inicio, comparación, expresión final) instrucción

    for(let = index ; index < array.length; index++){
        instrucciones
    }

    for( let i = 0; i<10;i++){
        instrucciones;
    }
*/ 
//Iteramos los arreglos
//si se pone <= llega al elemento final pero como no haya elementos 
//manda undefined
for( let i = 0; i<armasCh22.length;i++){//post incremento si
    //preincremento primero se incrementa luego se lee
    //l y o no se recomienda por parecer números
    console.log(`El elemento ${i +1} tiene Indice ${i} tiene ${armasCh22[i]}`);

}

/* armasCh22.forEach( callbackFunction) */

function iterarArreglo(elemento,indice, arreglo){
    console.log(` CB - Indice ${indice} tiene ${elemento}`);
}
iterarArreglo(true,4);

//armasCh22.forEach( iterarArreglo );

armasCh22.forEach( (elemento,indice) => 
console.log(`AF ${indice} tiene ${elemento}`)
);

for ( let arma in armasCh22) // da elemetos e indíce
    console.log(`ForIn ${arma} tiene ${armasCh22[arma]}`);
    
    for ( let arma of armasCh22) // da elemetos e indíce
    console.log(`Forof arma: ${arma}`);//da elementos solamente

//iterar de forma descendente las armas

for(let i=armasCh22.length-1; i>0;i-- ){
    console.log(`El indice ${i} tiene ${armasCh22[i]}`);
}


 


