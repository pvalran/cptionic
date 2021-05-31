import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
})
export class AdicionalesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardarAdicionales(){
    this.router.navigate(['/menu'])
  }
}
