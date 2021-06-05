import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.page.html',
  styleUrls: ['./inmueble.page.scss'],
})
export class InmueblePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  guardarInmueble(){
    this.router.navigate(['/menu'])
  }
}
