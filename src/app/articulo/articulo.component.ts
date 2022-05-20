import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
import { ArticuloService } from './articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = [];
  constructor(private articuloService: ArticuloService) { }
  average:number = 0;

  getArticulos() {
    this.articuloService.getArticulos().subscribe(articulos => {
      this.articulos = articulos;
      this.getAveragePrice();
    });

  }
  ngOnInit() {
    this.getArticulos();
  }

  getAveragePrice() {
    let total: number = 0;
    this.articulos.forEach((articulo) => total = total + articulo.price);
    this.average = total/this.articulos.length;
  }
}
