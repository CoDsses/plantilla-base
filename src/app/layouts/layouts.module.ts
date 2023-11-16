import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class LayoutsModule { }
