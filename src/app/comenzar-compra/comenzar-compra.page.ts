import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductosService } from '../servicios/productos.service';
@Component({
  selector: 'app-comenzar-compra',
  templateUrl: './comenzar-compra.page.html',
  styleUrls: ['./comenzar-compra.page.scss'],
})
export class ComenzarCompraPage  {

 carrito=[];
 products=[];
 contadorItems :BehaviorSubject<number>;

  constructor(private producto:ProductosService) { }

  ngOnInit() {
   this.products = this.producto.obtenerProductos();
    
  }
  abrirCarrito() {
    console.log("Abrir el carrito")
  }

}
