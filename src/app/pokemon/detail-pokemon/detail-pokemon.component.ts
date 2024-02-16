import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-pipe-color.pipe";
import { CommonModule } from "@angular/common";
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-detail-pokemon',
    standalone: true,
    templateUrl: './detail-pokemon.component.html',
    styles: ``,
    imports: [PokemonTypeColorPipe, CommonModule]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId != null) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons'])
  }

}
