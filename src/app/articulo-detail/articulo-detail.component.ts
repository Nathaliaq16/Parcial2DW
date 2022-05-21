import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {
  @Input() articuloDetail!: Articulo;
  constructor() { }

  ngOnInit() {
  }

}
