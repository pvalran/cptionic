import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/service/utilidades'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!Utilidades.validSession()) {
      this.router.navigate(['/login']);
    }
  }

  aceptarDeclaracionInicial() {
    this.router.navigate(['/captureid']);
  }
}
