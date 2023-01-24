import { Usuario } from "./js08-clases.js";
import { Producto, ProductoElectronico } from "./js08-clase-producto.js";

//Instanciar un objeto 
//obejtos con const
const brayanCorrea = new Usuario(
    "Brayan",
    "brayancorb@gmmail.com",
    "esta es una direccion",
    "5578964123"
);

//instanciar objeto es darle una localidad en memoria cuando se le asigna el new Usuario
/* console.log(brayanCorrea); //lo ordena de orden ascendente
console.log("nombre: " + brayanCorrea.nombre);
console.log("email: " + brayanCorrea.email );
console.log("direccion: " + brayanCorrea.direccion);
console.log("telefono: " + brayanCorrea.telefono);
console.log("fechaDeCreacion: " + brayanCorrea.fechaCreacion);
 */

console.log(brayanCorrea);
console.log(brayanCorrea.imprimirDatos());
const KarlaArena = new Usuario(
    "Karla",
    "karla@outlook.com",
    "av. chocolate",
    "8178963214"
);

console.log(KarlaArena.imprimirDatos());//como es una funcion se usan los parentesis

const helado = new Producto("Helado de Vainilla",
    80,
    "e3259939-f0eb-4632-a46f-0a5025f713d9");

for (let claveHelado in helado)
    console.log(claveHelado);

console.log("Dato leido de un atributo protegido: " + helado.nombre);//helado de vainilla
helado.nombre = "helado de limon";
console.log("Dato leido de un atributo protegido: " + helado.nombre);//helado de limon

KarlaArena.agregarProductoACarrito(helado)
KarlaArena.agregarProductoACarrito(new Producto("Pollo", 110, "57553be5-d365-4287-9a6c-d3e468a71f35"));
KarlaArena.agregarProductoACarrito(new Producto("Galleta", 200, "09f21e1f-2821-4329-af7a-c5ba64f849f4"));

const grabadora = new ProductoElectronico("LG Super X3000",
    5000,
    "4a63d2ab-358a-46ff-a06b-ffefe3860152", 365
)


KarlaArena.agregarProductoACarrito(grabadora)
console.log(KarlaArena.imprimirDatos());