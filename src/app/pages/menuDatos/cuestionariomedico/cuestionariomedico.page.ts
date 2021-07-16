import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionariomedico',
  templateUrl: './cuestionariomedico.page.html',
  styleUrls: ['./cuestionariomedico.page.scss'],
})
export class CuestionariomedicoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/home']);
  }

  guardarCuestionarioMedico(){
    this.router.navigate(['/adicionalcuestionariomedico'])
  }

}
