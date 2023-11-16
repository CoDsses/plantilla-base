import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TitleComponent } from './components/title/title.component';




@NgModule({
  declarations: [
    UsersPageComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
