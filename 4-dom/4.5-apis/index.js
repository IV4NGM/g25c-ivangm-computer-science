// async function getDataFromJSON(){
//     const response = await fetch('info.json');
//     console.log('response: ', response);
// }

const getDataFromJson = async () => {
    // 1. Leer el archivo .json con ayuda de fetch y controlando la asincronía con await
    const response = await fetch('./info.json');
    console.log('response: ', response);
    // 2. Obtener del response con la función .json la data (pokemons)
    const pokemons = await response.json();
    console.log('pokemons: ', pokemons); 
};

// getDataFromJson();

const getDataFromApi = async () => {
    // 1. Leer el archivo .json con ayuda de fetch y controlando la asincronía con await
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('response: ', response);
    // 2. Obtener del response con la función .json la data (pokemons)
    const pokemons = await response.json();
    console.log('pokemons: ', pokemons);
    console.log('pokemons: ', pokemons.results);
    for (iterador of pokemons.results){
        const response = await fetch(iterador.url);
        const pokemon = await response.json()
        console.log('pokemon ', pokemon.name, pokemon.sprites.front_default)
        document.querySelector("#container").innerHTML += `<div style="display: flex; align-items: center"><p>${pokemon.name}</p><img src="${pokemon.sprites.front_default}" style="width: 100px; height: 100px"></div>`
    };
};

getDataFromApi();

