console.log("Sesion JS06");

const obtenerNombre = () => prompt("Escribe tu nombre", "Brayan");
 
const econtrarElementoById = () => {
    const element = document.getElementById("titulo");
    
    console.log("Entre las etiquetas "+element.innerHTML);//innerHTML trae lo que esta entre eqtieutas
    element.innerHTML += " Manipulación del DOM"
    const nombreDesarrollador = obtenerNombre();
    //con el InnerHTML puedo agregar etiquetas nuevas
    
    element.innerHTML += ` Manipulación del <strong>DOM</strong> por <em>
    ${nombreDesarrollador}<em>
    `; 
 
    element.innerHTML =`<h1>${element.innerHTML} Manipulación del <strong>DOM</strong> por <em> ${nombreDesarrollador}</em> </h1>`;
 
} 

econtrarElementoById();
 
const encontrarElementosByTagName = () => {
    //const elements = document.getElementsByTagName("p");
    const [ ,introRef] = document.getElementsByTagName("p");
    //Obtener el indice 0
    //const introRef = elements[1].innerHTML;
    //Modificamos el contenido de introRef 
    console.log(introRef.innerHTML);
    introRef.innerHTML = "Las <strong>quesadillas</strong> van con queso, es un hecho"

};

encontrarElementosByTagName();

//Funcion que me cambia a azul el estilo de las etiquetas <em>

const cambiarColorAzul = (nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    for(let element of elements)
      
        element.style.color = nuevoColor;
}

cambiarColorAzul("blue");

const encontrarElementosByClassName = () => {
    const elements = document.getElementsByClassName("subtitulo");
    for (let element of elements)
        console.log(element.innerTEXT);
}

encontrarElementosByClassName();

//El selector Universal

const econtrarElemntosByQuerySelector = () => {
    const element = document.querySelector(".subtitulo");
    console.log(element?.innerText);
}

//Query selector trae el primer elemento que encuentra

const crearElemento = () => {
    newElement = document.createElement("p");
    newElement.innerHTML = `La Ch22 es bien <strong> chida</strong> por
    <ul>
        <li>Diversas</li>
        <li>Listos y listas</li>
        <li>Hay clasese de bienes y raices</li>
        <li>Cholos</li>
        <li>Amigables</li>
        <li>La Ch22 te respalda</li>
        <li>Sin problemas en quesadillas</li>
    </ul>`;
    document.getElementById("datos-generation").appendChild(newElement);
}

crearElemento();
