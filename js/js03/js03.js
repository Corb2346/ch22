console.log("Ya sirve el js03");

const datosUsuario = { nombre:"Jessica", ciudad:"CDMX"}
/* Declaracion de bloque
*/

{
    //esto es una declaracion de bloque
    //en donde las variables declaradas (let y const )
    //solo tendrán alcance dentro del bloque o 
    //bloque anidads dentro del bloque

    const datosUsuario = {nombre:"Wicho",ciudad:"Aguascalientes"};
    const numPersonas = 49;
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);

    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`)
    }
    
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);

//var no respeta alcance y todo lo hace global el ultimo var que encuentra reescribe todo

//Condicional If 

/* 
    Sintáxis: 
        if(condiciónVerdadera) Instrucción;

         if(condiciónVerdadera){
            Instrucciones;
        } else instruccion_en_caso_contrario;

        if(condiciónVerdadera){
            Instrucciones;
        }

*/
const respuesta = true //confirm("¿Te gusta Shakira?");
console.log("La respuesta es: "+respuesta);
let mensaje = "escucho rock";

if(respuesta) {
    let mensaje = "Reproduciendo Waka waka"; //se declara una nueva variable local
    mensaje = "Poniendo otra canción ";//cuando acaba el bloque se elimina la variable
}
else 
        mensaje = "Reproduciendo chambelan"

        console.log(mensaje);//imprime esucho rock 

        // si es la respuesta es false pasa a la condicion y como es false
        // imprime poniendo otra canción

    //Operador Ternario

    //Sintáxis: condición ? condición_verdadera : condición_falsa;
    
    /*let teamFrio = confirm("¿Te gusta el frío?");
    let mensajeTernario = teamFrio ? "Te mando hielito" : "Eres team calor"

    console.log(`Mensaje: ${mensajeTernario}`);

    console.log(`Te voy a servir: ${teamFrio ? "frio" : "calor"}`); //se puede reducir a una linea

    let cantante = "Brayan";
    console.log(`Tu reloj es ${ cantante === 'shakira' ? "Rolex": 
        cantante === "Pique" ? "Casio" : "el sol"}`);*/

/* 
    Condicional If, Else, Else If
    Sintaxis
        if(condicionVerdadera) instruccion;
        else if (segundaCondición) instrucción
        else if (terceraCondicion) instrucción
        else if (condicion n) intrucción
        else instrucción;

*/ 

let nombrePersona = 'Brayan';
let marcaReloj;
if(nombrePersona === 'Shakira')

// Operadores Lógicos and(&&) y or (||) 
/* 
    A       B       C
    true    true    true
    true    false   false




*/

/* 
    Condicional Switch
        Sintáxis:
            switch(expresión){
                case valor1:
                    instrucciones;
                    break;
                case valor2:
                    instrucciones;
                    break;
                case valorn:
                    instrucciones;
                    break;
            } 
            
*/

nombrePersona = 'Karla';
marcaReloj = '';

switch(nombrePersona){
    case 'Shakira':
        marcaReloj = 'Rolex';
        break;
    case 'Pique':
        marcaReloj = 'Casio';
        break;
    case 'Sergio':
        marcaReloj = 'El sol';
        break;
    default:
        marcaReloj = 'Uno de Cars'
}
console.log(`Switch - ${nombrePersona} tu reloj es ${ marcaReloj}`);

/*
    Preguntar(prompt) el número de mes, del 1 al 12.
    de acuerdo al mes indica desplegar en consola
    la estación del año:
    mes 12, 1, 2 = Invierno;
    mes 3, 4, 5 = Primavera;
    mes 6, 7, 8 = Verano;
    mes 9, 10, 11 = Otoño;

    Usar switch.
*/

/*Usar switch.
    La estación del año es invierno
    Mes: 1
    En enero la estación del año es invierno
    mes: 6
    En junio la estación del año es verano
*/ 


let numeroMes = 1 //parseInt(prompt("Inserta el número de un Mes: "));

if(numeroMes>0 && numeroMes< 13){

    let mes ="";
    let temporada=""

     switch(numeroMes){
        case 12: 
            mes = "Diciembre";
            temporada = "Invierno";
            break;
        case 1: 
            mes="Enero";
            temporada = "Invierno";
            break;
        case 2: mes ="Febrero"
            temporada = "Invierno";
            break;
        case 3: 
            mes ="Marzo";
            temporada= "Primavera";
            break;
        case 4: 
            mes="Abril";
            temporada= "Primavera";
            break;
        case 5:
            mes="Mayo";
            temporada= "Primavera";
            break;
        case 6:
            mes="Junio";
            temporada = "Verano";
            break;
        case 7:
            mes="Julio";
            temporada = "Verano";
            break;
        case 8:
            mes="Agosto"
            temporada = "Verano";
            break;
        case 9:
            mes="Septiembre"
            temporada = "Otoño";
            break;
        case 10:
            mes="Octubre"
            temporada = "Otoño";
            break;
        case 11:
            mes="Nomviembre"
            temporada = "Otoño";
            break;
        
    }  

    console.log(`En ${mes} la estación del año es ${temporada} `);
} else console.log("valor no valido");


let numeroMe = parseInt(prompt("Introduce un número de mes: "));

