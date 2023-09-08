import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components-library/ui/button/button.component';
import { InputComponent } from './components-library/ui/input/input.component';
import { LoginPageComponent } from './components-library/pages/login-page/login-page.component';
import { SignupPageComponent } from './components-library/pages/signup-page/signup-page.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components-library/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
