console.log("sesion js 01");

/*Son 7 datos primitivos de Javascript 

    - String ("Hola Mundo")
    - Number (1800.02)
        Los números se utilizan 64 bits para almacenarlo
        pero, solo se usan 
        exponente es con ** (2 ** 53) -1 9007199254740991 
        maximo numero con el tipo de dato number
        o Number.MAX_SAFE_INTEGER
        agregando valores se desvorda, salta numeros o repite
        para pasar de number a bigint se usa:
        let bigIntVar = BigInt(number)
        9007199254740991n la n dice que es big Int
        para aumentar valores se debe agregar una n 

        9007199254740991n + 2n
        9007199254740993n

        La presicion de JS se limita a 15 digitos
        mas de 15 digitos da resultados inesperados

        Mas digitos se recomienda guardar tipo string

    - BigInt utiliza mas recuersos del sistema

    - Boolean ( true / false )
    
    - Undefined ( undefined ) : Cuando no se define el tipo de dato, cuando se asigna número o texto JS lo detecta
    
    - Null : sirve para borrar el valor almacenado en una variable, no es de ningun tipo
        si aplicamos un typeof da object por ser un bug cuando se creó JS

        para saber si es null se compara con una estricta comparación 

        edad === null // true
        edad === undefined // false 
        
        Intencionalmente se elimina el tipo de dato

    - Symbol 
    
    Tipos de Datos Object: 
    
    - Object 
        const myObject = {
            clave:'valor',
            datoBoolean: true,
            edad:20
        };

        crear objetos de tipo const para evitar reasignaciones y perder datos

        para leer datos es con myObject[propiedad] o myObject.propiedad

    - Array 
        const myArray = [];
        
    Funciones
    
    */

    let myObject = {
        clave:"valor",
        edad:20,
        5:5
    }

    console.log(myObject.edad);
    const propiedad = 'edad'
    console.log(myObject[propiedad]);

    myObject.nombre = "Brayan";
    console.log(myObject["nombre"]); 
    console.log(myObject.nombre);
    console.log(myObject);

    delete myObject[5];

    console.log(myObject);

    const myArray = ['Brayan',15,90.23,true];
    console.log(myArray);

    console.log(myArray[0]);

    myArray[1] = "Esto es otro valor";
    console.log(myArray);

    const otroArray = ["Este","es","un","texto"];


    console.log(otroArray.join(" "));

    //Conversiones de datos de String a number
    
    const numberFromString = parseInt('13295');
    console.log(numberFromString);
    console.log(typeof numberFromString);

    //parse int y parsefloat toma los digitos hasta que encuentra un texto

    Number.parseInt("12 25") //12
    console.log(Number.parseInt("12 25"));
    console.log(parseInt("12 25"));
    console.log(parseInt("$12 25"));//$ si empieza con simbolo da NaN

    // NaN nunca es igual a otro tipo 

    //console.log(Nan == Nan y NaN === NaN ); false 

    Number.isNaN ( NaN) // true 
    Number.isNaN ( Number.parseInt("$12")) // true 

    //javascript puede cambiar números de string a número automaticamente con operaciones
    console.log("22" + 1); //concatena da 221
    console.log("22" * 2); 
    console.log("22" / 1); 
    console.log("22" - 1); 

    console.log(Number.parseInt(10,2)); // 2 
    console.log("Base 16: " + Number.parseInt(1000,16));

    //conversion de datos
    let numero = '16';
    console.log((numero).toString());
    console.log("Numero 1000 a diferentes bases:");
    console.log((1000).toString());
    console.log("1000 a base 2 = "+ (1000).toString(2));

    console.log(Math.pow(2,53)); //Math tiene metodos definidos
    
