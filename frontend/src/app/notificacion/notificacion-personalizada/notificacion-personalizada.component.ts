import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-notificacion-personalizada',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './notificacion-personalizada.component.html',
  styleUrl: './notificacion-personalizada.component.css'
})
export class NotificacionPersonalizadaComponent {
  contador=0;
  constructor(private router:Router) {
  }
  backPage() {
    if (this.contador > 0) {
      this.contador--;
    } else {
      this.router.navigate(['notificacion']);
    }
  }
}
