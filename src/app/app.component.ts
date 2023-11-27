import { Component } from '@angular/core';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PokemonTableComponent,
    DetailPokemonComponent,
    RouterOutlet,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
