console.log("ya sirve");

// Operador Asignación
let estadoDiminutoDeMéxico = "Tlaxcala";

//Operadores Aritmeticos
//multiplicacion

let metrosCuadrados = 10 * 30; //300
//tenemos 2 terrenos
// emtroscuadrados = metrosCuadrados *2;
//Operadores simplificados

metrosCuadrados *= 2;//600

//Division / 
//Dividimos el terrenito entre 3 hijos

metrosCuadrados /= 3;//200
console.log("m2 de 3 terrrenos"+metrosCuadrados);

//residuo %
//Quiero saber la cantidad de metrosCuadrados son múltiplos de 2
let esMultiplo2 = metrosCuadrados % 2 ? "No" : "Si";
console.log("La cantidad es múltiplo de 2?" + esMultiplo2);
let precioTerreno = 90000;
//Resta - 
let precioM2 = 90000/300;
console.log(`Precio del metro cuadrado ${precioM2} pesitos`);
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log(`Cantidad restante $${cantidadRestante} pesitos`);
//se abonó $10,000.00
console.log(`Cantidad Restante $${cantidadRestante-= 10000}  pesitos`);

//Suma
//Cobro por la generación de escrituras ( 8%)

/* 
    const costoEscrituras = precioTerreno * .08;
    precioTerrerno += costoEscrituras;
    log("Terreno + escrituras $" precioTerreno); //97200

*/
/* 
console.log("Terreno + escrituras $" + (precioTerreno += precioTerreno * 0.08 ));

{
    let espaniol = ingles = rumano = turco = vasco = chino = true;
    japones = true //Variable global no declarada
    //no  se puede leer espaniol por que let no la deja salir del bloque
    //con true si las detecta por que se le asigna un valor true

}
console.log("Francisco habla español = " + espaniol);
console.log("Francisco habla ingles = " + ingles);
console.log("Francisco habla rumano = " + rumano);
console.log("Francisco habla turco = " + turco);
console.log("Francisco habla vasco = " + vasco);
console.log("Francisco habla chino = " + chino);
 */
// Operadores de corto circuito

// OP1 || OP2 Sí OP1 = true, se realiza el resultado de OP1

let isOnline = true;
let isActive = true; 

if(isOnline){
    if(isActive)
    console.log("Estamos Autorizados");
}

if(isOnline && isActive)
console.log("Estamos autorizados");
//se leen de izq a derecha
isOnline && isActive && console.log("Estamos autorizados");

//true e imprime en consola 

let edadMiSobrina =15;
console.log( edadMiSobrina>18 && "Puede votar");//false no se ejecuta 2op e imprime false

let numDeQuesadillasAComer = "3";
let guisado = "Huitlacoche";
console.log("Montse comerá quesadiillas de: "+ numDeQuesadillasAComer&&guisado);//huitlacoche
//nivel 12 es mayor se ejecuta primero y como es string true
//aplica segundo operador y por eso imprime huitlacoche con () se da primoridad a && y despues a concatenacion

//imperime Montse comerá quesadiillas de:"Huitlacoche"

let nombreConductor ="PAX";
let tieneLicenciaConducir =true;
let edadConductor = 50;

const seRentaAuto = nombreConductor && tieneLicenciaConducir && edadConductor<60;
console.log("Resultado" + seRentaAuto);

const datosQuesadilla = {
    torilla:"maiz",
    tieneQueso: true,
    pica: "poquito"
}

const picaLaQuesadilla = datosQuesadilla.pica && "Pica Mucho"; // por corto circuito da pica mucho
//al leer dato que no existe es undefined
//convertido a booleano da false

console.log(picaLaQuesadilla);

console.log( "Poquito" || "pica mucho");

/* 

"Poquito" && "Pica Mucho"
18 && true && "Hola"; // "Hola"
"Poquito" || "Pica mucho" //"Poquito"
"Poquito" || "Pica Mucho" && "Ni pica"
false || "Pica Mucho" && "Ni pica" //"Ni pica"

18 || false || "Hola" && "1023"; // 18
((0 || (!false)) || ("Hola" && "1023")); //1023

*/

