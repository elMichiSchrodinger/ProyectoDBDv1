import {Component, OnInit} from '@angular/core';
import {CommonModule, NgClass, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {DetalleCandidatoService} from '../services/detalle-candidato.service';
import {DetalleCandidato} from '../models/detalleCandidato.model';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    CommonModule
  ],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent implements OnInit {
  constructor(private router:Router, private notificacionService:DetalleCandidatoService) {
  }
  notificacionAprobados:DetalleCandidato[]=[];
  notificacionDesaprobados:DetalleCandidato[]=[];
  estado=false;
  estadoAprobado=false;
  contador=1;
  cambiarEstado(tipo: 'estado' | 'estadoAprobado') {
    if (tipo === 'estado') {
      this.estado = !this.estado;
    } else if (tipo === 'estadoAprobado') {
      this.estadoAprobado = !this.estadoAprobado;
    }
  }
  backPage() {
    if (this.contador > 0) {
      this.contador--;
    } else {
      this.router.navigate(['menu']);
    }
  }
  nextPage() {
    if (this.contador < 8) { // Asegúrate de que no exceda la última página
      this.contador++;
    }
  }
  ngOnInit() {
    this.notificacionService.obtenerCandidatosAprobados().subscribe({
      next: (data) => {
        this.notificacionAprobados = data;
      },
      error: (error) => {
        console.error('Error al obtener los candidatos',error);
      }
    })
    this.notificacionService.obtenerCandidatosDesaprobados().subscribe({
      next: (data) => {
        this.notificacionDesaprobados = data;
      },
      error: (error) => {
        console.error('Error al obtener los candidatos',error);
      }
    })
  }
  personalizarMensaje(){
    this.router.navigate(['personalizar']);
  }
}
