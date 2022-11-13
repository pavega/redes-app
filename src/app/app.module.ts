import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDividerModule  } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AuthenticatedSiteComponent } from './authenticated-site/authenticated-site.component';
import { AuthServiceService } from './services/auth-service.service';
import { HasRoleGuard } from './guards/has-role.guard';
import { BlockComponent } from './block/block.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';


const appRoutes: Routes = [
  {
    path: 'blockme',
    component: BlockComponent,
    data: { title: 'Blocked'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'Adminsite',
    component: AdminSiteComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'Admin' }
  },
  {
    path: 'Authenticatedsite',
    component: AuthenticatedSiteComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'Authenticated' }
  },
  {
    path: 'register',
    component: UserRegistrationComponent,
    data: { title: 'Register'}
  },
  {
    path: 'registerUsers',
    component: AdminRegistrationComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'Admin' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '404', component: HomeComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AdminSiteComponent,
    AuthenticatedSiteComponent,
    BlockComponent,
    UserRegistrationComponent,
    AdminRegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    AuthServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
