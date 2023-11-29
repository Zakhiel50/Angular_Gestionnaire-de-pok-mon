import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    FormsModule,
  ],
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router) {}

  ngOnInit() {
    // récupère la liste des types via le Pokemonservice
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    // retourne le type du pokémon
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event ,type: string) { 
    // indique si l'utilisateur à coché ou décocher une case
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
  
    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      // récupère l'index du type checké et le retire.)
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1)
    }
  }

  isTypesValid(type: string): boolean {
    // si seulement 1 type est coché, il ne dois pas être décoché
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    // si 3 types sont cochés, il ne peux pas coché une autre (3 max)
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    // si les autres conditions ne sont pas remplis, la case est coché ou décoché
    return true;
  }

  onSubmit() {
    // envoi le formlaire et redirige l'utlisateur sur la carte du pokémon qu'il à modifié
    console.log("submit form !");
    this.router.navigate(["/pokemon", this.pokemon.id]);
  }
}
