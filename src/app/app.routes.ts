import { Routes } from '@angular/router';
import { PokemonTableComponent } from './pokemon/pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { Page404Component } from './page-404/page-404.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    { path: "edit/pokemon/:id", component: EditPokemonComponent },
    { path: "pokemons", component: PokemonTableComponent },
    { path: "pokemon/:id", component: DetailPokemonComponent },
    { path: "", redirectTo: "pokemons", pathMatch: "full" },
    { path: "**", component: Page404Component } // ** intercepte toutes les routes et envoie sur la vue choisie, ici page404
];
