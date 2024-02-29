import { Component, inject } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-pipe-color.pipe';
import { PokemonService } from '../pokemon.service';
import { PathsPokemon } from '../pokemon.path';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  paths = PathsPokemon
  pokemonList: Pokemon[] = this.pokemonService.getPokemonList();
  
  pokemonSelected: Pokemon|undefined;
  defaultBack: string = BorderCardDirective.randomGradient();

  constructor(private pokemonService: PokemonService) {
  }
  
  selectPokemon(pokemonId: string) {
    this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonSelected?.name}`)
  }

}
