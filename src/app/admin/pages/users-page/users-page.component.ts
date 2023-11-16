import { Component } from '@angular/core';
import { UsuarioService } from '../../usuarios.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {

  constructor(public usuarios: UsuarioService) { }


}
