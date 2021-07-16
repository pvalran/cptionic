import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laborales',
  templateUrl: './laborales.page.html',
  styleUrls: ['./laborales.page.scss'],
})
export class LaboralesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/home']);
  }

  guardarInformacionLaboral(){
    this.router.navigate(['/menu'])
  }
}
