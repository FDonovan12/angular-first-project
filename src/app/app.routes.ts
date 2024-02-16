import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pokemon/pokemon.routes')
    },
    { 
        path: '**', 
        loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
    }
];
