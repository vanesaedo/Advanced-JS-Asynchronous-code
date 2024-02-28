//RESUELVE TUS EJERCICIOS AQUI

//## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

//https://dog.ceo/dog-api/

//1
function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        //el segundo then almacena como argumento lo que devuelve el anterior then
        .then(razas => Object.keys(razas.message));
    //Recordar que esto es una cinta de una peli, temporal, todo ocurre dentro. Lo que sacamos no sucede.
}
//el segundo then recibe como argmento lo que recoge el primer then

//2
function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")

        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(imagen => {
            console.log(imagen);
            return imagen.message
        });
}

//3

function getAllImagesByBreed() {
    return fetch("https://dog.ceo/api/breed/komondor/images")
        .then(res => res.json())
        .then(imagen => imagen.message);
};

//4

function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res.json())
        .then(imagen => imagen.message);
};
//5

//---### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###
/*
function getGitHubUserProfile(username){
return fetch("https://api.github.com/users/{username})")
    .then(res => res.json())
    .then(imagen => imagen.message);
};

//Notas de clase: stringyfy()*/

//Sollucuión de Pablo

function getGitHubUserProfile(username) {
    return fetch('https://api.github.com/users/' + username)
        .then(user => user.json())
}

//insertar en body
//getGitHubUserProfile("imisstheoldpabl0").then(data => document.body.innerHTML = data);

//json.stringify()
//getGitHubUserProfile("imisstheoldpabl0").then(data => document.body.innerHTML = JSON.stringify(data));
//6


const printGithubUserProfile = username => {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          
            let imgTag = document.createElement('img');
            imgTag.setAttribute('src', data.avatar_url);
            imgTag.setAttribute('alt', 'foto user');
            let pUser = document.createElement('p');
            let pText = document.createTextNode(`${data.username}`);
            pUser.appendChild(pText);
            let body = document.getElementsByTagName('body')[0];



            body.appendChild(imgTag);
            body.appendChild(pUser);
            return { img: data.avatar_url, name: data.name };

        }

    )
}

//7