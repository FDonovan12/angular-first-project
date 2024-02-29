import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PathsPokemon } from './pokemon/pokemon.path';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  paths = PathsPokemon
  constructor() {}
  ngOnInit(): void {
    
  }
}
