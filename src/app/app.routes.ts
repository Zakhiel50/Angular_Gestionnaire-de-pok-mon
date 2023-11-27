import { Routes } from '@angular/router';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

export const routes: Routes = [
    { path: "pokemons", component: PokemonTableComponent },
    { path: "pokemon/:id", component: DetailPokemonComponent },
    { path: "", redirectTo: "pokemons", pathMatch: "full" }
];
