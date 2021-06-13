import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostServiceService } from 'src/app/service/post-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {

  constructor(private service: PostServiceService) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {
    return this.service.validaToken();
  }
}
