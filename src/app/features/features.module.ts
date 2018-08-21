import { NgModule } from '@angular/core';
import { NgxMdModule } from 'ngx-md';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';
import { BestPracticesComponent } from './bestpractices/bestpractices.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMdModule.forRoot(),
  ],
  declarations: [HomeComponent, AboutComponent, TasksComponent, BestPracticesComponent],
  exports: [HomeComponent, AboutComponent]
})
export class FeaturesModule { }
