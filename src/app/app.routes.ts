import { Routes } from '@angular/router';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'posts',
        pathMatch:'full'       
    },
    {
        path:'posts',
        component:PostsComponent,
    },
    {
        path:'users',
        component:UsersComponent,
    },
    
];
