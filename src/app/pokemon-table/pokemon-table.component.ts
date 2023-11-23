import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-pokemon-table',
  standalone: true,
  imports: [CommonModule, BorderCardDirective],
  templateUrl: 'pokemon-table.html',
  styleUrl: `pokemon-table.css`
})
export class PokemonTableComponent {
  pokemonList: Pokemon[] = POKEMONS ; // initialise la variable pokemonList qui est de typePokémon dans un tableau qui prends comme données POKEMONS (liste ddes pokémons)
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    //const index: number = +(event.target as HTMLInputElement).value; // + devant l'expression va la convertir en Number

    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
    
    
  }
}
