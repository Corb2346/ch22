console.log("Sesion JS02");

/* 

Funciones declaradas / funciones definidas 
(function declaration / function statement)

Una característica de las funciones declaradas 
es que tiene Hoisting (elevación)


*/

console.log("El resultado de 5 x 10 es igual a " + multiplica(5,10));

function multiplica ( a,b){
    return a * b;
} // JS lo eleva y la pone hasta arriba 

/* 

    Funciones Expresadas 

    Las funciones expresadas ( function expression )
    son funciones declaradas dentro de la asignacion de una variable

    Estas funciones pueden ser anónimas (no tienen nombre).
    Las funciones expresadas no tienen hosting.

*/

/**
 * Acá se ponene comentarios de las funciones se debe poner arriba de la
   func anónima
 * @param {number} a primer operador a sumar
 * @param {number} b segundo operador a sumar
 * @returns resultado de a + b 
 */
const suma = function (a , b) {  // al no tener nomrbe se considera funcoin anónima
    const result = a+b;
    return result;
}; // deber tener ; al ser estas funciones no están en memoria, 
//las funciones definidas si estan en memoria

console.log("La sumatoria de a 4 + 6 = " + suma(4,6)); // se invoca a la variabl suma ya que tiene asignada a la función anónima 
// las funciones expresadas no tienen hosting es decir no se puede evelvar 
// y si esta antes la llamada no lo reconoce

/*
    Funciones autoinvocadas.

    Las funciones autoinvocadas ( Self-invoking functions)
    Son funciones que se ejecutan en su definición.
    Pueden ser anónimas.

*/

( function saludo(){
    console.log("Hola, me estoy autoinvocando");
})(); //estos parencesis ejecutan lo que está dento a su izquierda

//()(); 

/*
    Funciones Flecha. 

    Una función flecha(arrow functions) son similares 
    a las funciones expresadas, pero no requieren la palabra 
    function. Además si solo tiene una instrucción y es solo el
    retorno no requiere la instrucción return ni llaves {}.
    
*/

const restaExpresada = function ( a,b) {
    return a-b;
}

const restaFlecha = (a,b) => a - b;

console.log("La resta de 20 - 2 = " + restaExpresada(20,2));

const exponente = (a,b) => {
     const result = a**b;
     return result;
}

console.log("El numero 4^3 = " + exponente(4,3));

const exponenteAlCuadrado = a => a ** 2; // cuando solo hay 
/* un parámetro de entrada se omiten los paréntesis */

console.log("El número 4^2 = "+ exponenteAlCuadrado(4));

const imprimeSaludo = () => console.log("Hola Mundo");
imprimeSaludo(); 

//Las funciones Flecha no tienen hoisting

/* 
    Funciones con parámetros Inicializados
*/

function divide (a=5,b=1){ // parámetros inicializados
    return a/b;
}

console.log("La division de 3 / 1 = " + divide(3)); // NaN llega como  3 / undefined
//undefined / undefined = NaN

/* 
    Rest Parameters 
    El parámetro rest nos permite representar una serie de valores
    indefinidos en los argumentos como un array. 

    El parámetro rest debe ir al final de todos los parámetros
*/  

function sumatoriaIndefinida(a,b, ...restoDatos){
    let sumatoria = a+b;
    for (let index = 0; index < restoDatos.length; index++) {
        sumatoria += restoDatos[index]; // sumatoria = sumatoria + restoDatos
    }
    return sumatoria;
}

console.log("Sumar varios numeros: " + sumatoriaIndefinida(2,3,4,5,6));

/* 
    Funciones Recursivas.
    Es una función que se llama asimisma

*/ 

/* 
    Factorial de 0 = 1 = !0
    Factorial de 3 = 3 * 2 * 1 = !3 
    Factorial de 5 = 5 * 4 * 3 * 2 * 1 = !5   
*/

function factorial(a){
  let result =1 ;
  for (let index =1; index <= a; index++) {
    result *= index;
  }
  return result;
}

console.log(factorial(3));//6
console.log(factorial(5));//120

function factorialConRecursion(a){
    if( a < 1) return 1;
    return a * factorialConRecursion(a - 1)
}

console.log(factorialConRecursion(3));//6
console.log(factorialConRecursion(5));//120