import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

import { Pokemon } from './pokemon';


@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    // retourne la liste de pokémons via la simulation d'un serveur distant.
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    // vérifie si l'id du pokémon existe, si oui, récupère l'id du pokémon 
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>
        this.handleError(error, undefined))
    )
  }

  // Permet de log la réponse attendue
  private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
  }

  // Permet de renvoyer l'erreur s'il y à lieu d'être.
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
    
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante", 
      "Feu", 
      "Eau", 
      "Insecte", 
      "Normal", 
      "Electrik", 
      "Poison", 
      "Fée", 
      "Vol", 
      "Combat", 
      "Psy"
    ]
  }
}
