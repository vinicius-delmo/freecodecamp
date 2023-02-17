import { pokemons } from "./data.js";
import { pokemonTypesInPtBR } from "./data.js";

//Function que procura um pokemon por nome:
const searchPokemon = (arrPokemon, name) =>
  arrPokemon.find((pokemons) => pokemons.name === name);

const pokemon = searchPokemon(pokemons, "pidgeot");
console.log(pokemon);
//Listar todos os pokemons de um mesmo tipo

const filterPokemons = (pokemonArray, type) =>
  pokemonArray.filter((pokemons) => pokemons.type.includes(type));

const sameType = filterPokemons(pokemons, "bug");
console.log(sameType);

// Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

const pokemonsPT = pokemons.map((pokemons) => {
  const newTypesInPtBR = pokemons.type.map((type) => pokemonTypesInPtBR[type]);
  return { ...pokemons, type: newTypesInPtBR };
});

console.log(pokemonsPT);
