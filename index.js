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

function getAllImagesByBreed2(breed){
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(imagen => imagen.message);
};
//5

//---### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###

function getGitHubUserProfile(username){
return fetch("https://api.github.com/users/{username})")
    .then(res => res.json())
    .then(imagen => imagen.message);
};









