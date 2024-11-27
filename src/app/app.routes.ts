import { Routes } from '@angular/router';
import { lazyResolver } from './resolver/lazy.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        loadComponent: () => import('./pages/posts/posts.component').then(m => m.PostsComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
    },
    {
        path:'l',
        redirectTo:'lazy',
        pathMatch:'full'
    },
    {
        path: 'lazy',
        loadComponent: () => import('./pages/lazy/lazy.component').then(m => m.LazyComponent),
        resolve: { lazyResolver }
    },
    {
        path: 'ssg',
        loadComponent: () => import('./pages/ssg/ssg.component').then(m => m.SSGComponent),
    },


];
