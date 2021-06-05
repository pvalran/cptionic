import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuProductos = [
    {
      id: 1,
      text: 'Fovissste Tradicional Individual'
    },
    {
      id: 2,
      text: 'Fovissste Tradicional Mancomunado'
    },
    {
      id: 3,
      text: 'Pensionados'
    },
    {
      id: 4,
      text: 'Conyugal infonavit Fovissste'
    },
    {
      id: 5,
      text: 'Individual Infonavit Fovissste'
    },
    {
      id: 6,
      text: 'Fovissste Tradicional Mancomunado'
    },
    {
      id: 7,
      text: 'Fovissste para todos'
    },
    {
      id: 8,
      text: 'Creditos Bancarios'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // if (!Utilidades.validSession()) {
    //   this.router.navigate(['/login']);
    // }
  }

  addProduct(item) {
    this.router.navigate(['/captureid']);
  }
}
