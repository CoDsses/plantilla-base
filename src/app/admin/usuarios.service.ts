import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UsuarioService {

  usuario: any = '';

  constructor(private http: HttpClient) {
    console.log('Listo')
    //Leer el archivo Json del firebase
    this.cargarUsuario();

  }

  private cargarUsuario() {
    this.http.get('https://usuarios-plantilla-default-rtdb.firebaseio.com/Usuarios.json')
      .subscribe(resp => {
        this.usuario = resp;
        console.log(resp);
      });
  }






}
