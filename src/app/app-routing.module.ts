import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'loginconductor',
    loadChildren: () => import('./pages/loginconductor/loginconductor.module').then( m => m.LoginconductorPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registroconductor',
    loadChildren: () => import('./pages/registroconductor/registroconductor.module').then( m => m.RegistroconductorPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicioconductor',
    loadChildren: () => import('./pages/inicioconductor/inicioconductor.module').then( m => m.InicioconductorPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
