import { Routes } from '@angular/router';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
    { path: "pokemons", component: PokemonTableComponent },
    { path: "pokemon/:id", component: DetailPokemonComponent },
    { path: "", redirectTo: "pokemons", pathMatch: "full" },
    { path: "**", component: Page404Component } // ** intercepte toutes les routes et envoie sur la vue choisie, ici page404
];
