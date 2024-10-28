import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { FinansialComponent } from './common/finansial/finansial.component';
import { TeknoComponent } from './common/tekno/tekno.component';
import { LifestyleComponent } from './common/lifestyle/lifestyle.component';
import { ArtsComponent } from './common/arts/arts.component';
import { WorldComponent } from './common/world/world.component';
import { MoviesComponent } from './common/movies/movies.component';

export const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path: 'finansial', component:FinansialComponent
    },
    {
        path: 'tekno', component:TeknoComponent
    },
    {
        path: 'lifestyle', component:LifestyleComponent
    },
    {
        path: 'movies', component:MoviesComponent
    },
    {
        path: 'world', component:WorldComponent
    },
    {
        path: 'arts', component:ArtsComponent
    }
];
