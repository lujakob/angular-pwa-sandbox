import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos.component'
import { CommitsComponent } from './commits.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReposComponent
      },
      {
        path: ':name/commits',
        component: CommitsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
