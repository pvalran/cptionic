import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  adicionales(){
    this.router.navigate(['/adicionales'])
  }

  dependientesEconomicos(){
    this.router.navigate(['/dependienteseconomicos'])
  }

  conyuge(){
    this.router.navigate(['/conyuge'])
  }

  laborales(){
    this.router.navigate(['/laborales'])
  }

  referencias(){
    this.router.navigate(['/referencias'])
  }

  cuestionariomedico(){
    this.router.navigate(['/cuestionariomedico'])
  }

  inmueble(){
    this.router.navigate(['/inmueble'])
  }
}
