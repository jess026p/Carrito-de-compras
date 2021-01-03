import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.page.html',
  styleUrls: ['./asistente.page.scss'],
})
export class AsistentePage  {


  constructor(private router: Router) {}

  navigateToasistente1(){
    this.router.navigate(['/login']);
  }

  navigateToasistente2(){
    this.router.navigate(['/registrar']);
  }
  navigateToasistente3(){
    this.router.navigate(['/comenzar-compra']);
  }
  navigateToasistente4(){
    this.router.navigate(['/home']);
  }
  
}
