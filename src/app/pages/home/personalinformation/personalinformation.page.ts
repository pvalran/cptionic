import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.page.html',
  styleUrls: ['./personalinformation.page.scss'],
})
export class PersonalinformationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardarPersonalInformation(){
    this.router.navigate(['/consultaburo'])
  }

}
