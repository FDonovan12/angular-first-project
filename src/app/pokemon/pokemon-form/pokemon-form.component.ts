import { Component, Input, OnInit, inject } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { PokemonTypeColorPipe } from '../pokemon-pipe-color.pipe';
import { CommonModule } from '@angular/common';
import { PathsPokemon } from '../pokemon.path';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [FormsModule, PokemonTypeColorPipe, CommonModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css',
  host: {ngSkipHydration: 'true'}
})
export class PokemonFormComponent implements OnInit {
  paths = PathsPokemon

  @Input() pokemon: Pokemon;
  types: string[]

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if(isChecked) {
      this.pokemon.types.push(type)
    } else {
      this.pokemon.types = this.pokemon.types.filter((el) => el != type);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    console.log('Submit form !');
    this.router.navigate([this.paths.pokemon, this.pokemon.id])
    
  }
}
