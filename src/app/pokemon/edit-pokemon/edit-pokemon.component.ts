import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    CommonModule, 
    PokemonFormComponent,
    LoaderComponent
  ],
  providers: [PokemonService],
  templateUrl: `./edit-pokemon.component.html`,
  styleUrl: `./edit-pokemon.component.css`
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    ) {}

    ngOnInit(){
      // récupère l'id dans l'url
      const pokemonId: string|null = this.route.snapshot.paramMap.get("id");
      if(pokemonId) {
        // récupère le pokémon associé
        this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
      }else {
        // sinon undefined
        this.pokemon = undefined;
      }
    }
}
