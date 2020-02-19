import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component'
import {HttpInterceptorModule} from './service/header-interceptor.service';
import { UserComponent } from './model/user/user.component';

export const appRouters: Routes = [

  {path : 'home', component : HomeComponent },
  {path: 'login', component : LoginComponent},
    {path: '', component : LoginComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
