import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos/repos.component'
import { CommitsComponent } from './commits/commits.component'

const routes: Routes = [
  { path: 'repos', component: ReposComponent },
  { path: 'repos/:name/commits', component: CommitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
