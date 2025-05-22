import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent 
  },

  {
    path: 'signin',
    component: SigninComponent
  },

  {
    path: 'Dashboard',
    component: DashboardComponent
  },

  {
    path: 'settings',
    component: SettingsComponent
  },

  {
    path: 'task',
    component: TaskComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
