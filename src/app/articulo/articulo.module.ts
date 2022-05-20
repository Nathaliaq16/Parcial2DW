import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './articulo.component';
import { ArticuloDetailComponent } from '../articulo-detail/articulo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticuloComponent, ArticuloDetailComponent],
  exports: [ArticuloComponent]
})
export class ArticuloModule { }
