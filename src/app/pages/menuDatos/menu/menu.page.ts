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
    //this.router.navigate(['/home']);
  }

  adicionalesNavegacion(ruta){
    this.router.navigate([ruta]);
  }
}
