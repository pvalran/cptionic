import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-menuproductos',
  templateUrl: './menuproductos.page.html',
  styleUrls: ['./menuproductos.page.scss'],
})
export class MenuproductosPage implements OnInit {
  menuProductos: any[] = [];

  constructor(
    private router: Router,
    private service: PostServiceService
    ) { }

  ngOnInit() {
    this.service.getPetition("creditApplication/product/all").subscribe(
      result => {
        if(result.data.length > 0){
          result.data.forEach(element => {
            this.menuProductos.push(element)
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addProduct(item) {
    this.router.navigate(['/captureid']);
  }
}
