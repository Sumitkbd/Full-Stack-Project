import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './include/footer/footer.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewTableComponent } from './pages/view-table/view-table.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateStudentComponent } from './pages/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AddUserComponent,
    ProfileComponent,
    LoginPageComponent,
    ViewTableComponent,
    RegisterComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
