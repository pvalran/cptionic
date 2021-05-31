import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captureid',
  templateUrl: './captureid.page.html',
  styleUrls: ['./captureid.page.scss'],
})
export class CaptureidPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  useCamara(){
    console.log("Camara");
  }

  guardarIdCapture(){
    this.router.navigate(['/personalinformation'])
  }
}
