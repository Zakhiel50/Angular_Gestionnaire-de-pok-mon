import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonFormComponent,
  ],
  providers:[PokemonService],
  templateUrl: `add-pokemon.component.html`,
  styles: ``
})
export class AddPokemonComponent implements OnInit{

  pokemon: Pokemon;


  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
