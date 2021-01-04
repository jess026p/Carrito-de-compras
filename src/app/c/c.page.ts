import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-c',
  templateUrl: './c.page.html',
  styleUrls: ['./c.page.scss'],
})
export class CPage  {

  constructor(private router: Router) {}

  navigateToasistente(){
    this.router.navigate(['/comenzar-compra']);
  }
  navigateToc(){
    this.router.navigate(['/asistente']);
  }
  navigateToc1(){
    this.router.navigate(['/Contactos']);
  }
}