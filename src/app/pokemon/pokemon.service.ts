import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {


  getPokemonList(): Pokemon[] {
    // retourne la liste de pokémons.
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    // vérifie si l'id du pokémon existe, si oui, récupère l'id du pokémon 
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante", 
      "Feu", 
      "Eau", 
      "Insecte", 
      "Normal", 
      "Electrik", 
      "Poison", 
      "Fée", 
      "Vol", 
      "Combat", 
      "Psy"
    ]
  }
}
