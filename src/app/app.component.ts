import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';


@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrl: "app.component.css",
  standalone: true,
  imports: [NgForOf, RouterOutlet, PokemonTableComponent]
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'Gestionnaire de pokémon';
}