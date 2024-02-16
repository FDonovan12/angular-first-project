import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  test: string = (Math.floor(Math.random()*256).toString(16)).padStart(2, '0'); 

  getPokemonList(): Pokemon[] {
    console.log(this);
    
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return this.getPokemonList().find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 'Feu', 'Eau',
      'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol',
      'Combat', 'Psy']
  }
}
