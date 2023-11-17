import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Liste de pokémons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS ;
  

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`${pokemon.name}`);
    
  }
}

// Modifier le template pour afficher le message "Liste de pokémon"
// PokemonList, chargé la liste des 12 pokémons
// selectPokémon: paramètre = un pokémon qui proviens de la liste mock