import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conyuge',
  templateUrl: './conyuge.page.html',
  styleUrls: ['./conyuge.page.scss'],
})
export class ConyugePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardarConyuge(){
    this.router.navigate(['/menu'])
  }
}
