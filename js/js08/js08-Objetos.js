console.log("ya sirve el js08");

//crear objeto

const frutasColor = {
    fresa: "roja",
    pinia: "amarrillo",
    pepino: "verde",
    naranja:"verde-amarillo"
};

//Formas para leer un objeto
console.log(frutasColor.fresa);
console.log(frutasColor[`pepino`]);
const colorFrutasNaranja = "naranja";
console.log(frutasColor[ colorFrutasNaranja ]);

//Modificacion a un valor
frutasColor[ colorFrutasNaranja ] = "amarillo-naranja";
console.log(frutasColor[ colorFrutasNaranja ]);// amarrllo-naranja

for( let frutaColor in frutasColor )//IN lee las claves
    console.log("clave", frutaColor,"valor",frutasColor[frutaColor]);

/* for( let frutaColor of frutasColor)//leer valores del objeto con OF
    console.log("valor:",frutaColor);
 */

//Uso Symbol 
const oculto = Symbol();
const datosAutomovil = {
    modelo:"Vocho",
    fabricante: "VW",
    [oculto] : 250_000, //entre corchetes adentro va la clave 
    //se definio la variable arriba
    //symbol() es un elemento unico
}
//los symbol no se iteran en objeto
for( let clave in datosAutomovil)
console.log("Dato " + datosAutomovil[clave]);

console.log("Dato oculto" + datosAutomovil[ oculto] );

localStorage.setItem("automovil",JSON.stringify(datosAutomovil));

const words = ["hello","world","javascript"];
const capitalizeWords = words.map( word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizeWords);

//clases son moldes o plantollas para hacer objetos 
//los objetos tienen atributos y pueden hacer acciones

const myArray = [5,7,8,14];

//Creando un arreglo usando el constructor
const myArraWithConstructor = new Array( 5,7,8,14);
//leyendo una propiedad del objeto myArray
//Propiedad de longitud
//Las propiedades con características del objeto, estos no llevan parentésis

myArray.length//4

//Usando el método (acción) para extraer el 7 y 8
console.log(myArray.slice(1,3));/// [7,8] uno al 3 sin incluir el indice 3

