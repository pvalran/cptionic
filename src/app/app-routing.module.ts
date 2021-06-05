import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'captureid',
    loadChildren: () => import('./pages/home/captureid/captureid.module').then( m => m.CaptureidPageModule)
  },
  {
    path: 'personalinformation',
    loadChildren: () => import('./pages/home/personalinformation/personalinformation.module').then( m => m.PersonalinformationPageModule)
  },
  {
    path: 'consultaburo',
    loadChildren: () => import('./pages/menuDatos/consultaburo/consultaburo.module').then( m => m.ConsultaburoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menuDatos/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'adicionales',
    loadChildren: () => import('./pages/menuDatos/adicionales/adicionales.module').then( m => m.AdicionalesPageModule)
  },
  {
    path: 'dependienteseconomicos',
    loadChildren: () => import('./pages/menuDatos/dependienteseconomicos/dependienteseconomicos.module').then( m => m.DependienteseconomicosPageModule)
  },
  {
    path: 'conyuge',
    loadChildren: () => import('./pages/menuDatos/conyuge/conyuge.module').then( m => m.ConyugePageModule)
  },
  {
    path: 'laborales',
    loadChildren: () => import('./pages/menuDatos/laborales/laborales.module').then( m => m.LaboralesPageModule)
  },
  {
    path: 'referencias',
    loadChildren: () => import('./pages/menuDatos/referencias/referencias.module').then( m => m.ReferenciasPageModule)
  },
  {
    path: 'cuestionariomedico',
    loadChildren: () => import('./pages/menuDatos/cuestionariomedico/cuestionariomedico.module').then( m => m.CuestionariomedicoPageModule)
  },
  {
    path: 'inmueble',
    loadChildren: () => import('./pages/menuDatos/inmueble/inmueble.module').then( m => m.InmueblePageModule)
  },
  {
    path: 'adicionalcuestionariomedico',
    loadChildren: () => import('./pages/menuDatos/adicionalcuestionariomedico/adicionalcuestionariomedico.module').then( m => m.AdicionalcuestionariomedicoPageModule)
  },
  {
    path: 'declaracioninicial',
    loadChildren: () => import('./pages/menuDatos/declaracioninicial/declaracioninicial.module').then( m => m.DeclaracioninicialPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/home/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
