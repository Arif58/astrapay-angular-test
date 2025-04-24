import { Routes } from '@angular/router';
import { IndexComponent } from './note/index/index.component';
import { CreateComponent } from './note/create/create.component';

export const routes: Routes = [
    {path: '', redirectTo: 'note/index', pathMatch: 'full'},
    {path: 'note/index', component: IndexComponent},
    {path: 'note/create', component: CreateComponent},

];
