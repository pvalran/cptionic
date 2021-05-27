import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependienteseconomicos',
  templateUrl: './dependienteseconomicos.page.html',
  styleUrls: ['./dependienteseconomicos.page.scss'],
})
export class DependienteseconomicosPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  guardarAdicionales(){
    this.router.navigate(['/menu'])
  }

}
