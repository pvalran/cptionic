import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'captureid',
    loadChildren: () => import('./home/captureid/captureid.module').then( m => m.CaptureidPageModule)
  },
  {
    path: 'personalinformation',
    loadChildren: () => import('./home/personalinformation/personalinformation.module').then( m => m.PersonalinformationPageModule)
  },
  {
    path: 'consultaburo',
    loadChildren: () => import('./home/consultaburo/consultaburo.module').then( m => m.ConsultaburoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menuDatos/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'adicionales',
    loadChildren: () => import('./menuDatos/adicionales/adicionales.module').then( m => m.AdicionalesPageModule)
  },
  {
    path: 'dependienteseconomicos',
    loadChildren: () => import('./menuDatos/dependienteseconomicos/dependienteseconomicos.module').then( m => m.DependienteseconomicosPageModule)
  },
  {
    path: 'conyuge',
    loadChildren: () => import('./menuDatos/conyuge/conyuge.module').then( m => m.ConyugePageModule)
  },
  {
    path: 'laborales',
    loadChildren: () => import('./menuDatos/laborales/laborales.module').then( m => m.LaboralesPageModule)
  },
  {
    path: 'referencias',
    loadChildren: () => import('./menuDatos/referencias/referencias.module').then( m => m.ReferenciasPageModule)
  },
  {
    path: 'cuestionariomedico',
    loadChildren: () => import('./menuDatos/cuestionariomedico/cuestionariomedico.module').then( m => m.CuestionariomedicoPageModule)
  },
  {
    path: 'inmueble',
    loadChildren: () => import('./menuDatos/inmueble/inmueble.module').then( m => m.InmueblePageModule)
  },
  {
    path: 'adicionalcuestionariomedico',
    loadChildren: () => import('./menuDatos/adicionalcuestionariomedico/adicionalcuestionariomedico.module').then( m => m.AdicionalcuestionariomedicoPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./modal/information/information.module').then( m => m.InformationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
