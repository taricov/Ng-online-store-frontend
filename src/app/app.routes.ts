import { Routes } from '@angular/router';
import { RegisterFormComponent } from '@components/register-form/register-form.component';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterFormComponent
  },
];
