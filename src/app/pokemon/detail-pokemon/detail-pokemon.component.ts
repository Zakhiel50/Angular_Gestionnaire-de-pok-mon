import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule, 
    PokemonTypeColorPipe,
  ],
  providers: [PokemonService],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit() {
    // récupère l'id dans l'url
    const pokemonId: string|null = this.route.snapshot.paramMap.get("id");

    if(pokemonId) {
      // récupère le pokémon associé
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon)
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goToPokemonTable());
  }

  goToPokemonTable() {
    // renvoi l'utilisateur sur pokémonTable
    this.router.navigate(["/pokemons"]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    // renvoi l'utilisateur sur l'édition du pokémon
    this.router.navigate(["/edit/pokemon", pokemon.id])
  }
  
}
