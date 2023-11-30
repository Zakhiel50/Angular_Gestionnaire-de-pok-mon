import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../../border-card.directive';
import { DatePipe, NgForOf } from '@angular/common';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  standalone: true,
  imports:[
    BorderCardDirective, 
    DatePipe, 
    NgForOf, 
    PokemonTypeColorPipe, 
    DetailPokemonComponent
  ],
  providers:[PokemonService],
  selector: 'app-pokemon-table',
  templateUrl: 'pokemon-table.html',
  styleUrls: ['pokemon-table.css']
})



export class PokemonTableComponent{
  pokemonList: Pokemon[] //= POKEMONS ; // initialise la variable pokemonList qui est de typePokémon dans un tableau qui prends comme données POKEMONS (liste ddes pokémons)
  

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    ) { }

  ngOnInit() {
    // récupère le tableau de pokémons via le service
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemonDetail(pokemon: Pokemon) {
    // Envoi l'utilisateur sur le pokémon séléctioné
    this.router.navigate(["/pokemon", pokemon.id])
  }
}