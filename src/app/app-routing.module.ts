import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "pokemon-table", component: PokemonTableComponent},

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
