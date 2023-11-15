import { Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: 'users', component: UsersPageComponent },

]

export const AdminRoutes: Routes = [
    {
        path: '',
        children: routes
    }

];
