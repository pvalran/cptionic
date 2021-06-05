import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultaburo',
  templateUrl: './consultaburo.page.html',
  styleUrls: ['./consultaburo.page.scss'],
})
export class ConsultaburoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  guardarConsultaBuro(){
    this.router.navigate(['/menu'])
  }

}
