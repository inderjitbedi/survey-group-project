// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './routing/app-routing.module';
// import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './providers/auth.guard';
import { CommonAPIService } from './providers/api.service';
import { AlertService } from './providers/alert.service';
import { GetSetService } from './providers/getSet.provider';
import { LoaderInterceptor } from './providers/loader.interceptor';
import { AuthInterceptor } from './providers/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { LoaderService } from './providers/loader.service';
import { LoaderModule } from './views/common/loader/loader.module';
// // import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     MaterialModule,
//     AppRoutingModule,
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     LoaderModule
//   ],
//   providers: [
//     CommonAPIService,
//     AuthGuard,
//     AlertService,
//     GetSetService,
//     LoaderService,
//     { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import {NgOptimizedImage} from "@angular/common";
// import { ProductStoreComponent } from './product-store/product-store.component';
// import { ModelModule } from './Model/model.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutComponent,
    // ProductsComponent,
    // ServicesComponent,
    ContactUsComponent,
    BasePageComponent,
    LoginComponent,
    RegisterComponent
    // ProductStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ModelModule
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoaderModule,
    NgOptimizedImage,
    // MaterialModule,
    //     AppRoutingModule,
    //     BrowserModule,
    //     AppRoutingModule,
    //     BrowserAnimationsModule,
    //     HttpClientModule,
    //     LoaderModule
  ],
  providers: [
    CommonAPIService,
    AuthGuard,
    AlertService,
    GetSetService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
