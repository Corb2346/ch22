console.log("ya sirve el js");

//Fetch api es una promesa

const getUsers = (page = 1) => {

    const url = `https://reqres.in/api/users?page=${page}`;

    fetch(url) //para el get no se añade otro parametro
        .then(response => {//response tiene la respuesta
            //se deben convertir a objeto
            console.log("Status" + response.status);
            
           return response.json();//esto es promesa
        })//se encadena otro then para que data reciba el return
        //
        .then( users => {
            console.log("Total de elementos:" + users.total);
            //leer a Data = [datos del uusuario];
            //console.log(users.data);
            localStorage.setItem("users",JSON.stringify(users.data));
            for( let user of users.data)
                console.log(`${user.id}-${user.first_name}-${user.last_name}`);

        })  
        .catch( error => console.log(error));
}

const btnFetchApiPost = document.getElementById("fetch-api-post");
btnFetchApiPost.addEventListener('click', ()=>{

    const url = 'https://reqres.in/api/users';
    const data = {
        name: "Aurelio",
        job: "Obrero"
    };
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));

});

function readLocalStorage(){
    console.log(JSON.parse(localStorage.getItem('users')));
}

