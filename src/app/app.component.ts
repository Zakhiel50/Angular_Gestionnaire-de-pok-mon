import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PokemonTableComponent } from './pokemon/pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { Page404Component } from './page-404/page-404.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    AppModule,
    EditPokemonComponent,
    PokemonTableComponent,
    DetailPokemonComponent,
    Page404Component,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
