import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TasksComponent } from './tasks/tasks.component';
import { BestPracticesComponent } from './bestpractices/bestpractices.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'bestpractices', component: BestPracticesComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
