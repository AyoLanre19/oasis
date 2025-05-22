import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    TaskComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
