import { Component } from '@angular/core';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PokemonTableComponent,
    
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
