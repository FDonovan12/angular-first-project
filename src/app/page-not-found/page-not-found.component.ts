import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathsPokemon } from '../pokemon/pokemon.path';



@Component({
  selector: 'page-404',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class='center'>
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    <h1>Hey, cette page n'existe pas !</h1>
    <a href="{{paths.pokemons}}" class="waves-effect waves-teal btn-flat">
      Retourner à l' accueil
    </a>
  </div>
`
})
export class PageNotFoundComponent { 
  paths = PathsPokemon
  constructor() {}
}
