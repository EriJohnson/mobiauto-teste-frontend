// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saída de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

const axios = require('axios').default;

const BASE_URL = 'https://rickandmortyapi.com/api/character';

const httpClient = axios.create({ baseURL: BASE_URL });

const CHARACTERS = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Beth Smith',
  'Jerry Smith',
];

function formatResults(results) {
  return results.map(character => ({
    nome: character.name,
    genero: character.gender === 'Male' ? 'Homem' : 'Mulher',
    avatar: character.image,
    especie: 'Humano',
  }));
}

function getCharacters(character) {
  return httpClient.get(`?name=${character}`);
}

async function getRicAndMortyCharacters() {
  return Promise.all(
    CHARACTERS.map(character => getCharacters(character))
  ).then(results => {
    const characters = results.map(result => result.data.results[0]);
    const formattedResults = formatResults(characters);

    return formattedResults;
  });
}

module.exports = getRicAndMortyCharacters;
