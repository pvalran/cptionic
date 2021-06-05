import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionalcuestionariomedico',
  templateUrl: './adicionalcuestionariomedico.page.html',
  styleUrls: ['./adicionalcuestionariomedico.page.scss'],
})
export class AdicionalcuestionariomedicoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  guardarAdicionalesCuestionarioMedico(){
    this.router.navigate(['/menu'])
  }

}
