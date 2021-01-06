import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export interface Product {
id:number;
nombre: string;

cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
data: Product[]= [

  {id:1, nombre: 'Queso', cantidad:1},
  {id:2, nombre: 'Yogurt', cantidad:1},
  {id:3, nombre: 'Mantequilla',cantidad:1},
  {id:4, nombre: 'Brocoli', cantidad:1},
  {id:4, nombre: 'Papa',cantidad:1}
]

private carrito=[];
private contadorItems = new BehaviorSubject(0);

  constructor() { }
  obtenerProductos(){
    return this.data;
  }
}
