import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogListComponent]
})
export class CatalogModule { }
