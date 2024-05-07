// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UpdateStudentComponent } from './pages/update-student/update-student.component';
import { ViewTableComponent } from './pages/view-table/view-table.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
{ path: 'login', component: LoginPageComponent},
{ path: 'signup', component: RegisterComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'home', component: ViewTableComponent},
{ path: 'add-user', component: AddUserComponent },
{ path: 'update/:id', component: UpdateStudentComponent },
{ path: 'update', component: UpdateStudentComponent },
{ path: '**', redirectTo: '/signup', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
