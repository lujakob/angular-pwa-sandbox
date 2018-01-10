import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos.component';
import { CommitsComponent } from './commits.component'
import { RouterModule } from '@angular/router';
import { ReposRoutingModule } from './repos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReposRoutingModule
  ],
  declarations: [ReposComponent, CommitsComponent]
})
export class ReposModule { }
