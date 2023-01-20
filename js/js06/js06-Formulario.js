console.log("ya sirve el js06");

//visibility hiden oculta el elemento pero deja el espacio del objeto
// display none, esconde el elemento 

const refFormulario = document.forms["registro"];

refFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Evento Submit activado");
    const email = refFormulario.elements['inputEmail4'].value;
    console.log(email);
});
