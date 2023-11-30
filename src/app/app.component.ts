import { Component } from '@angular/core';
import { PokemonTableComponent } from './pokemon/pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { RouterOutlet } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EditPokemonComponent,
    FormsModule,
    PokemonTableComponent,
    DetailPokemonComponent,
    RouterOutlet,
    Page404Component,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
