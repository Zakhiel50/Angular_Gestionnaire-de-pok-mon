import { Component } from '@angular/core';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterOutlet } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PokemonTableComponent,
    DetailPokemonComponent,
    RouterOutlet,
    Page404Component,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
