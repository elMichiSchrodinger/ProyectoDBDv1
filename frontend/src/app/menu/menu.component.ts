import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  contadorModulo=0;
  estadoReclutamiento(){
    this.contadorModulo=5;
  }
  constructor(private router: Router) {
  }
  crearVacante(){
    this.router.navigate(['vacante']);
  }
  revisarPostulacion(){
    this.router.navigate(['postulacion']);
  }
  enviarNotificacion(){
    this.router.navigate(['notificacion']);
  }
  volverInicio(){
    this.router.navigate(['']);
  }
}
