//Pilares de la POO
//Encapsulamiento: No permitir el acceso directo a los atributos
//

class Producto{
    #nombre;
    #precio;
    #uuid;
    #createArticle;

    constructor(nombre,precio,uuid){
        this.#nombre = nombre //con el # se encapsulan los datos
        this.#precio = precio
        this.#uuid = uuid
        this.#createArticle = new Date()
    }
    
    //para dar acceso a los atributso encapsulados

    get nombre(){
        return this.#nombre
    }

    set nombre( nombre){
        //Solo guardar si la longitud es mayor a 5 caracteres
        this.filtrarNombre(nombre,5) && (this.#nombre = nombre); 
        
    }

    filtrarNombre(nombre , longitudMinima){
        if (nombre.length > longitudMinima)
            return true;
        else
            throw `La longitud es menor a ${longitudMinima} caracteres`;
    }

    imprimirDatos(){
        return  `
        UUID : ${this.uuid}
        Nombre : ${this.nombre}
        Precio : ${this.precio}`;
    }



    get precio(){
        return this.#precio
    }

    set precio( precio){
        this.#precio = precio; 
    }

    get uuid(){
        return this.#uuid
    }

    set uuid( uuid){
        this.#uuid = uuid; 
    }

    get createArticle(){
        return this.#createArticle
    }

    set precio( createArticle){
        this.#createArticle = createArticle; 
    }  
    
}

class ProductoElectronico extends Producto{

    #diasParaGarantia;

    constructor(nombre,precio,uuid,diasParaGarantia){
        //super() hace referencia al constructor de la clase padre 
        super(nombre,precio,uuid);
        this.#diasParaGarantia = diasParaGarantia;

    }

    set diasParaGarantia( dias){
        this.#diasParaGarantia = dias;
    }

    get diasParaGarantia(){
        return this.#diasParaGarantia;
    }

    imprimirDatos(){
        return super.imprimirDatos() + `
        Garantia: ${this.diasParaGarantia}
        `;
    }
    
}

export { Producto,ProductoElectronico }



