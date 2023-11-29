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
  imports: [CommonModule, PokemonTypeColorPipe],
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
    
    const pokemonId: string|null = this.route.snapshot.paramMap.get("id");

    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }
  }

  goToPokemonTable() {
    this.router.navigate(["/pokemons"]);
  }
  
}
