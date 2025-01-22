import { Routes } from '@angular/router';
import { TemperatureWidgetComponent } from './components/temperature-widget/temperature-widget.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'devices', component: TemperatureWidgetComponent },
  { path: 'manage-devices', component: TemperatureWidgetComponent },
  { path: 'roles', component: TemperatureWidgetComponent },
  { path: 'login', component: LoginComponent },
];
//  [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'home', component: HomeComponent },
//     { path: 'devices', component: TemperatureWidgetComponent },
//     { path: '**', redirectTo: 'login' }, 
//   ];
