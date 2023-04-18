// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../providers/auth.guard';

// const routes: Routes = [

//   {
//     path: 'login',
//     loadChildren: () => import('../views/auth/login/login.module').then(m => m.LoginModule),
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'dashboard',
//     loadChildren: () => import('../views/dashboard/dashboard.module').then(m => m.DashboardModule),
//     canActivate: [AuthGuard]
//   },

//   {
//     path: '**',
//     redirectTo: 'login'
//   }
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }






import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { LoginComponent } from '../views/auth/login/login.component';
import {RegisterComponent} from "../views/auth/register/register.component";
// import { ProductStoreComponent } from '../product-store/product-store.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contactus', component: ContactUsComponent, data: { title: 'Contact' } },
  { path: 'register' ,component: RegisterComponent, data: { title : 'login'}},
  { path: 'login' ,component: LoginComponent, data: { title : 'login'}},
  // { path: 'dashboard', component: ProductStoreComponent, data: { title: 'ProductList' } },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
