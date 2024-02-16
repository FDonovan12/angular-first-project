import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    template: `
    <h2>Editer {{ pokemon?.name }}</h2>
    <p [hidden]="!pokemon">
      <img [src]="pokemon?.picture">
    </p>
    @if (pokemon) {
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    }
    
  `,
    styles: ``,
    imports: [PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId != null) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

}
