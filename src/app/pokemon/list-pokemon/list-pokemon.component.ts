import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-pipe-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent implements OnInit {
  ngOnInit(): void {
    // console.log("ListPokemonComponent bef : " + this.defaultBack)
    // this.defaultBack = BorderCardDirective.randomGradient();
    // console.log("ListPokemonComponent aft : " + this.defaultBack)
  }
  pokemonList: Pokemon[] = this.pokemonService.getPokemonList();
  
  pokemonSelected: Pokemon|undefined;
  defaultBack: string = BorderCardDirective.randomGradient();

  constructor(private pokemonService: PokemonService) {
    // console.log("ListPokemonComponent cons bef : " + this.defaultBack)
    this.defaultBack = BorderCardDirective.randomGradient();
    // console.log("ListPokemonComponent cons aft : " + this.defaultBack)
  }
  
  selectPokemon(pokemonId: string) {
    this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonSelected?.name}`)
  }

}
