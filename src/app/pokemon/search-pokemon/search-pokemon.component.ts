import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
  styleUrls: [`./search-pokemon.component.css`]
})
export class SearchPokemonComponent implements OnInit {
  // Subject est une class appartenant à rxjs qui permet de stocker les recherche successive de l'utilisateur dans un tableau de chaines de caractère.
  // {..."b".."bu".."bul".."bulb".."bulbi".."bulbiz".."bulbiza".."bulbizar".. "bulbizarr".."bulbizarrz".."bulbizarr".."bulbizarre"}
  searchTerms = new Subject<string>();

  // par convention, pour indiquer que c'est un Observable on ajoute le signe "$"
  pokemons$: Observable<Pokemon[]>;

  constructor (
    private router: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    
    this.pokemons$ = this.searchTerms.pipe(
      // exemple de fonctionnement //
      // 1 "." équivaut à 100ms
      // {"b".."bu".."but"..."bu".."bul"..."bulb"} = 5 appel serveur
      debounceTime(300), // avec debounceTime() programmé à 300ms
      // {..."bu"..."bu"..."bulb"} = 3 appel serveur
      distinctUntilChanged(), // avec distinctUntilChanged()
      // {"bu"..."bulb"} = 1 appel serveur
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // renvoi : { pokemonList("bu")...pokemonList("bulb") } = 2 appel serveur
    )
  }

  search(term: string) {
    // Pemrt d'envoyer un flux de donnée à searchTerm
    this.searchTerms.next(term)
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
