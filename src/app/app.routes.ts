import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { FinansialComponent } from './common/finansial/finansial.component';
import { TeknoComponent } from './common/tekno/tekno.component';
import { LifestyleComponent } from './common/lifestyle/lifestyle.component';

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
    }
];
