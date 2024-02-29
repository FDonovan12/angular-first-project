import { Routes } from '@angular/router';
import path from 'path';
import { PokemonService } from './pokemon.service';
import { PathsPokemon } from './pokemon.path';

export const pokemonRoutes: Routes = [{
    path: '',
    providers: [PokemonService],
    children: [
        { 
            path: 'edit/pokemon/:id', 
            loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent)
        },
        { 
            path: PathsPokemon.pokemons , 
            loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) 
        },
        { 
            path: PathsPokemon.pokemon + '/:id', 
            loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
        },
        { 
            path: PathsPokemon.newPokemon, 
            loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
        },
        { 
            path: '', 
            redirectTo: PathsPokemon.pokemons, pathMatch:'full' 
        },
        { 
            path: '', 
            redirectTo: PathsPokemon.pokemons, pathMatch:'full' 
        }
    ]
}
] as Routes;
