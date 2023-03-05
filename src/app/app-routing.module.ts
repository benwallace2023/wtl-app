import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sscreen',
    pathMatch: 'full'
  },
 
  {
    path: 'sscreen',
    loadChildren: () => import('./Seiten/sscreen/sscreen.module').then( m => m.SScreenPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./Seiten/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Seiten/home/home.module').then( m => m.HomePageModule),
  canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./Seiten/login/login.module').then( m => m.LoginPageModule),
  canLoad: [AuthGuard]
  },
  {
    path: 'team',
    loadChildren: () => import('./Seiten/team/team.module').then( m => m.TeamPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./Seiten/contact/contact.module').then( m => m.ContactPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('./Seiten/news/news.module').then( m => m.NewsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren: () => import('./Seiten/order/order.module').then( m => m.OrderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'conditions',
    loadChildren: () => import('./Seiten/conditions/conditions.module').then( m => m.ConditionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
