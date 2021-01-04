import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {
  username:string;
  password: string;
  repass: string;
  constructor(private router: Router) {}

  registrar(){
    this.router.navigate(['/c']);
  }

}
