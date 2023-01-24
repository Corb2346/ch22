console.log("ya sirve el  js08 clases");

//Clases 
//Para crear una clase se usa la palabra reservada class
//El nombre de la clase debe ser con notación PascalCase ( UpperCamelCase) 

class Usuario{
    //estos son atributos del objeto que se vaa crear
    //nombre
    //email
    //direccion
    //telefono

    //constructor le da vida a una clase
    //creando el costructor de la clase

    nombre; 
    email;
    direccion;
    telefono;
    fechaCreacion;
    #carritoCompras;

    //          estos son parámetros de la función
    constructor(nombre,email,direccion,telefono){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = new Date(); 
        this.#carritoCompras = [];
    }

    imprimirDatos(){

        let listadoProductos = "";
        this.#carritoCompras
        .forEach( producto => 
            listadoProductos += producto.imprimirDatos()+"\n");
      /*   if( this.carritoCompras.length>0){
            for(let producto of this.carritoCompras){
                listadoProductos += `
                UUID: \t${producto.uuid}
                Producto: \t${producto.Producto}
                Precio: \t${producto.precio}
                
                `;
            }
        } */

        const obtenerDatos = 
        `------->Datos Del Usuaio<-------
        nombre: ${this.nombre}
        email: ${this.email}
        direccion: ${this.direccion}
        teléfono: ${this.telefono}
        fecha de creacion: ${this.fechaCreacion}
        ${listadoProductos}
        `;
        return obtenerDatos; 
    }

    get nombre(){
        return this.nombre
    }

    set nombre( nombre){
        this.nombre = nombre; 
    }
    
    get email(){
        return this.email
    }

    set email( email){
        this.email = email; 
    }

    get carritoCompras(){
        return this.#carritoCompras
    }

    set carritoCompras(carritoCompras){
        this.#carritoCompras = carritoCompras
    }

    agregarProductoACarrito( producto){
        this.#carritoCompras.push( producto);
    }
}


 // en java se declaran los atributos javascript es más flexible

/* //Instanciar un objeto 
//obejtos con const
const brayanCorrea = new Usuario(
    "Brayan",
    "brayancorb@gmmail.com",
    "esta es una direccion",
    "5578964123"
    );

//instanciar objeto es darle una localidad en memoria cuando se le asigna el new Usuario
console.log(brayanCorrea); //lo ordena de orden ascendente

 */ export { Usuario };