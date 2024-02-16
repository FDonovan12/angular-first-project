import { Routes } from '@angular/router';
import path from 'path';
import { PokemonService } from './pokemon.service';

export default [{
    path: '',
    providers: [PokemonService],
    children: [
        { 
            path: 'edit/pokemon/:id', 
            loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent)
        },
        { 
            path: 'pokemons', 
            loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) 
        },
        { 
            path: 'pokemon/:id', 
            loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
        },
        { 
            path: 'pokemon/add', 
            loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
        },
        { 
            path: '', 
            redirectTo: 'pokemons', pathMatch:'full' 
        },
        { 
            path: '**', 
            redirectTo: 'pokemons', pathMatch:'full' 
        }
    ]
}
] as Routes;
